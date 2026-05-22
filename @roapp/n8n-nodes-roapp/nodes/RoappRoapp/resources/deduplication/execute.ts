import { IExecuteFunctions, NodeOperationError } from 'n8n-workflow';

const BASE_URL = 'https://api.roapp.io/';

type DuplicateGroup = {
	cluster_id: string;
	resource_type: 'person' | 'organization';
	records: Array<{
		id: number;
		email?: string;
		phone?: string | string[];
		name?: string;
		created_at?: string;
		[key: string]: any;
	}>;
	match_reasons: Array<{
		type: 'email' | 'phone' | 'name';
		value?: string;
		score?: number;
		compared_to?: number;
	}>;
	suggested_primary_id: number;
};

type MergeResult = {
	merged_into_id: number;
	merged_record_id: number;
	actions_taken: Array<{ field: string; action: string; count?: number }>;
	notes_added?: string;
	error?: string;
};

function normalizePhone(phone: string): string {
	if (!phone) return '';
	return phone.replace(/\D/g, '').trim();
}

function extractPhoneNumbers(record: any): string[] {
	const numbers: string[] = [];

	// Handle 'phones' array of objects or strings
	if (Array.isArray(record.phones)) {
		for (const p of record.phones) {
			if (typeof p === 'string') {
				numbers.push(p);
			} else if (p && typeof p.phone === 'string') {
				numbers.push(p.phone);
			}
		}
	}

	// Also handle singular 'phone' field (string or object)
	if (record.phone) {
		if (typeof record.phone === 'string') {
			numbers.push(record.phone);
		} else if (record.phone.phone) {
			numbers.push(record.phone.phone);
		}
	}

	return numbers.map(normalizePhone).filter((p) => p !== '');
}

function mergePhoneObjects(primaryPhones: any[], secondaryPhones: any[]): any[] {
	// Build a map by normalized number
	const map = new Map<string, any>();

	// Add primary phones
	primaryPhones.forEach((p) => {
		const num = normalizePhone(typeof p === 'string' ? p : p.phone);
		if (num) {
			map.set(num, p);
		}
	});

	// Add secondary phones that are not already present
	secondaryPhones.forEach((p) => {
		const num = normalizePhone(typeof p === 'string' ? p : p.phone);
		if (num && !map.has(num)) {
			map.set(num, p);
		}
	});

	return Array.from(map.values());
}

function normalizeEmail(email: string): string {
	return email ? email.trim().toLowerCase() : '';
}

function normalizeName(name: string): string {
	return name ? name.trim().toLowerCase().replace(/\s+/g, ' ') : '';
}

function jaroWinklerSimilarity(s1: string, s2: string): number {
	s1 = normalizeName(s1);
	s2 = normalizeName(s2);

	if (s1 === s2) return 1.0;
	if (s1.length === 0 || s2.length === 0) return 0.0;

	const matchDistance = Math.floor(Math.max(s1.length, s2.length) / 2) - 1;

	const s1Matches: boolean[] = new Array(s1.length).fill(false);
	const s2Matches: boolean[] = new Array(s2.length).fill(false);

	let matches = 0;
	let transpositions = 0;

	for (let i = 0; i < s1.length; i++) {
		const start = Math.max(0, i - matchDistance);
		const end = Math.min(i + matchDistance + 1, s2.length);

		for (let j = start; j < end; j++) {
			if (s2Matches[j]) continue;
			if (s1[i] !== s2[j]) continue;
			s1Matches[i] = true;
			s2Matches[j] = true;
			matches++;
			break;
		}
	}

	if (matches === 0) return 0.0;

	let k = 0;
	for (let i = 0; i < s1.length; i++) {
		if (!s1Matches[i]) continue;
		while (!s2Matches[k]) k++;
		if (s1[i] !== s2[k]) transpositions++;
		k++;
	}

	const m = matches;
	const jaro = (m / s1.length + m / s2.length + (m - transpositions / 2) / m) / 3;

	// Jaro-Winkler prefix boost
	let prefix = 0;
	const prefixLen = Math.min(4, Math.min(s1.length, s2.length));
	for (let i = 0; i < prefixLen; i++) {
		if (s1[i] === s2[i]) prefix++;
		else break;
	}

	return jaro + prefix * 0.1 * (1 - jaro);
}



function findDuplicates(
	records: Array<any>,
	minNameSimilarity: number,
): DuplicateGroup[] {
	const groups: DuplicateGroup[] = [];
	const visited = new Set<number>();

	// Normalize emails and phones for matching
	const normalizedEmails = new Map<string, number[]>();
	const normalizedPhones = new Map<string, number[]>();

	records.forEach((rec) => {
		const email = normalizeEmail(rec.email || '');
		if (email) {
			const list = normalizedEmails.get(email) || [];
			list.push(rec.id);
			normalizedEmails.set(email, list);
		}

		const phones = extractPhoneNumbers(rec);
		phones.forEach((p) => {
			const list = normalizedPhones.get(p) || [];
			list.push(rec.id);
			normalizedPhones.set(p, list);
		});
	});

	// Build adjacency graph
	const adjacency = new Map<number, Set<number>>();
	records.forEach((rec) => adjacency.set(rec.id, new Set()));

	// Email matches
	normalizedEmails.forEach((ids) => {
		if (ids.length > 1) {
			for (let i = 0; i < ids.length; i++) {
				for (let j = i + 1; j < ids.length; j++) {
					adjacency.get(ids[i])!.add(ids[j]);
					adjacency.get(ids[j])!.add(ids[i]);
				}
			}
		}
	});

	// Phone matches
	normalizedPhones.forEach((ids) => {
		if (ids.length > 1) {
			for (let i = 0; i < ids.length; i++) {
				for (let j = i + 1; j < ids.length; j++) {
					adjacency.get(ids[i])!.add(ids[j]);
					adjacency.get(ids[j])!.add(ids[i]);
				}
			}
		}
	});

	// Name similarity matches
	for (let i = 0; i < records.length; i++) {
		for (let j = i + 1; j < records.length; j++) {
			const a = records[i];
			const b = records[j];
			if (!a.name || !b.name) continue;
			const score = jaroWinklerSimilarity(a.name, b.name);
			if (score >= minNameSimilarity) {
				adjacency.get(a.id)!.add(b.id);
				adjacency.get(b.id)!.add(a.id);
			}
		}
	}

	// Find connected components (clusters)
	const clusters: number[][] = [];
	records.forEach((rec) => {
		if (visited.has(rec.id)) return;
		const cluster: number[] = [];
		const stack = [rec.id];
		visited.add(rec.id);
		while (stack.length) {
			const curr = stack.pop()!;
			cluster.push(curr);
			adjacency.get(curr)!.forEach((neighbor) => {
				if (!visited.has(neighbor)) {
					visited.add(neighbor);
					stack.push(neighbor);
				}
			});
		}
		if (cluster.length > 1) {
			clusters.push(cluster);
		}
	});

	// Build DuplicateGroup objects
	clusters.forEach((clusterIds, idx) => {
		const clusterRecords = clusterIds
			.map((id) => records.find((r) => r.id === id)!)
			.filter(Boolean);

		// Determine suggested primary (oldest by created_at)
		let primary = clusterRecords[0];
		clusterRecords.forEach((rec) => {
			if (rec.created_at && primary.created_at) {
				if (new Date(rec.created_at) < new Date(primary.created_at)) {
					primary = rec;
				}
			}
		});

		// Build match reasons
		const reasons: DuplicateGroup['match_reasons'] = [];
		clusterRecords.forEach((rec) => {
			clusterRecords.forEach((other) => {
				if (rec.id >= other.id) return;

				const emailRec = normalizeEmail(rec.email || '');
				const emailOther = normalizeEmail(other.email || '');
				if (emailRec && emailOther && emailRec === emailOther) {
					reasons.push({ type: 'email', value: emailRec });
				}

				const phonesRec = extractPhoneNumbers(rec);
				const phonesOther = extractPhoneNumbers(other);
				const commonPhones = phonesRec.filter((p) => phonesOther.includes(p));
				commonPhones.forEach((p) => reasons.push({ type: 'phone', value: p }));

				if (rec.name && other.name) {
					const score = jaroWinklerSimilarity(rec.name, other.name);
					if (score >= minNameSimilarity) {
						reasons.push({ type: 'name', score, compared_to: rec.id });
					}
				}
			});
		});

		groups.push({
			cluster_id: `group_${idx + 1}`,
			resource_type: records[0]?.resource_type || 'person' as any,
			records: clusterRecords,
			match_reasons: reasons,
			suggested_primary_id: primary.id,
		});
	});

	return groups;
}

export async function executeDeduplicationOperation(
	this: IExecuteFunctions,
	operation: string,
	index: number,
): Promise<any> {
	if (operation === 'findDuplicates') {
		const resourceType = this.getNodeParameter('resource_type', index) as string;
		const minNameSimilarity = this.getNodeParameter('min_name_similarity', index) as number;
		const maxRecords = this.getNodeParameter('max_records', index, 0) as number;

		const endpoint = resourceType === 'person'
			? `${BASE_URL}v2/contacts/people`
			: `${BASE_URL}v2/contacts/organizations`;

		try {
			// Paginate to fetch records
			const allRecords: any[] = [];
			let page = 1;
			let pageData: any[] = [];

			do {
				const response = await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
					method: 'GET',
					url: endpoint,
					json: true,
					qs: { page },
				});
				const data = response?.data || response;
				pageData = Array.isArray(data) ? data : (data.items || []);
				allRecords.push(...pageData);
				page++;

				// Stop if max_records reached (0 = no limit)
				if (maxRecords > 0 && allRecords.length >= maxRecords) {
					break;
				}
			} while (pageData.length > 0);

			// Apply max limit
			const limitedRecords = maxRecords > 0 ? allRecords.slice(0, maxRecords) : allRecords;

			const enrichedRecords = limitedRecords.map((r) => ({
				...r,
				resource_type: resourceType,
			}));

			const duplicateGroups = findDuplicates(enrichedRecords, minNameSimilarity);

			return {
				operation: 'findDuplicates',
				resource_type: resourceType,
				total_records: limitedRecords.length,
				duplicate_groups: duplicateGroups,
				groups_count: duplicateGroups.length,
			};
		} catch (error) {
			throw new NodeOperationError(this.getNode(), `Failed to fetch ${resourceType}: ${error.message}`, { itemIndex: index });
		}
	}

		if (operation === 'merge') {
			const resourceType = this.getNodeParameter('resource_type', index) as string;
			const recordAId = this.getNodeParameter('record_a_id', index) as string | number;
			const recordBId = this.getNodeParameter('record_b_id', index) as string | number;
			const primaryOverride = this.getNodeParameter('primary_id', index) as string | number;

			const idA = Number(recordAId);
			const idB = Number(recordBId);
			const primaryId = primaryOverride ? Number(primaryOverride) : null;

			if (isNaN(idA) || isNaN(idB)) {
				throw new NodeOperationError(this.getNode(), 'Invalid record IDs provided', { itemIndex: index });
			}

			if (primaryId && (primaryId !== idA && primaryId !== idB)) {
				throw new NodeOperationError(this.getNode(), 'Primary ID must be one of the two records', { itemIndex: index });
			}

			// Fetch full records
			const endpointA = resourceType === 'person'
				? `${BASE_URL}v2/contacts/people/${idA}`
				: `${BASE_URL}v2/contacts/organizations/${idA}`;
			const endpointB = resourceType === 'person'
				? `${BASE_URL}v2/contacts/people/${idB}`
				: `${BASE_URL}v2/contacts/organizations/${idB}`;

			try {
				const [recA, recB] = await Promise.all([
					this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
						method: 'GET',
						url: endpointA,
						json: true,
					}),
					this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
						method: 'GET',
						url: endpointB,
						json: true,
					}),
				]);

				const recordA = recA?.data || recA;
				const recordB = recB?.data || recB;

				if (!recordA || !recordB) {
					throw new NodeOperationError(this.getNode(), 'One or both records not found', { itemIndex: index });
				}

				// Determine primary and secondary
				let primary = recordA;
				let secondary = recordB;
				if (primaryId) {
					primary = primaryId === idA ? recordA : recordB;
					secondary = primaryId === idA ? recordB : recordA;
				} else {
					// Use oldest by created_at
					if (recordA.created_at && recordB.created_at) {
						if (new Date(recordB.created_at) < new Date(recordA.created_at)) {
							primary = recordB;
							secondary = recordA;
						}
					}
				}

				const actionsTaken: MergeResult['actions_taken'] = [];
				const notesPieces: string[] = [];

				// Prepare update payload for primary
				const updatePayload: any = {};

				// Phones: merge arrays, deduplicate
				const primaryPhones = Array.isArray(primary.phones) ? primary.phones : (primary.phone ? [primary.phone] : []);
				const secondaryPhones = Array.isArray(secondary.phones) ? secondary.phones : (secondary.phone ? [secondary.phone] : []);
				const mergedPhones = mergePhoneObjects(primaryPhones, secondaryPhones);
				if (mergedPhones.length !== primaryPhones.length || mergedPhones.some((p, idx) => p !== primaryPhones[idx])) {
					updatePayload.phones = mergedPhones;
					// Also remove singular phone if exists
					delete updatePayload.phone;
					actionsTaken.push({ field: 'phones', action: 'appended', count: mergedPhones.length - primaryPhones.length });
				}

				// Email: if different, move secondary email to notes
				const emailPrimary = normalizeEmail(primary.email || '');
				const emailSecondary = normalizeEmail(secondary.email || '');
				if (emailSecondary && emailSecondary !== emailPrimary) {
					notesPieces.push(`Merged email: ${secondary.email}`);
					actionsTaken.push({ field: 'email', action: 'moved_to_notes' });
				}

				// Name: if different, add to notes
				if (secondary.name && secondary.name !== primary.name) {
					notesPieces.push(`Merged name: ${secondary.name}`);
					actionsTaken.push({ field: 'name', action: 'moved_to_notes' });
				}

				// Other fields: move differing ones to notes
				const excludeFields = ['id', 'email', 'phone', 'name', 'created_at', 'updated_at', 'resource_type', 'notes', 'note'];
				Object.keys(secondary).forEach((key) => {
					if (excludeFields.includes(key)) return;
					if (secondary[key] !== undefined && secondary[key] !== primary[key]) {
						notesPieces.push(`Merged ${key}: ${JSON.stringify(secondary[key])}`);
						actionsTaken.push({ field: key, action: 'moved_to_notes' });
					}
				});

				// Update primary if any changes
				if (Object.keys(updatePayload).length > 0 || notesPieces.length > 0) {
					// Build final notes
					if (notesPieces.length > 0) {
						const existingNotes = primary.notes || primary.note || '';
						const combinedNotes = [existingNotes, ...notesPieces].filter(Boolean).join('\n');
						updatePayload.notes = combinedNotes;
						updatePayload.note = combinedNotes;
					}

					const updateUrl = resourceType === 'person'
						? `${BASE_URL}v2/contacts/people/${primary.id}`
						: `${BASE_URL}v2/contacts/organizations/${primary.id}`;

					await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
						method: 'PATCH',
						url: updateUrl,
						json: true,
						body: updatePayload,
					});
				}

				// Call merge API endpoint
				const mergeEndpoint = resourceType === 'person'
					? `${BASE_URL}v2/contacts/people/merge`
					: `${BASE_URL}v2/contacts/organizations/merge`;

				const mergeBody = {
					what_to_merge_id: secondary.id,
					target_id: primary.id,
				};

				const mergeResponse = await this.helpers.httpRequestWithAuthentication.call(this, 'roappRoappApi', {
					method: 'POST',
					url: mergeEndpoint,
					json: true,
					body: mergeBody,
				});

				return {
					operation: 'merge',
					resource_type: resourceType,
					merged_into_id: primary.id,
					merged_record_id: secondary.id,
					actions_taken: actionsTaken,
					notes_added: notesPieces.join('\n'),
					api_response: mergeResponse,
				};
			} catch (error: any) {
				const message = error.response?.body?.message || error.message;
				return {
					operation: 'merge',
					resource_type: resourceType,
					record_a_id: idA,
					record_b_id: idB,
					error: `Merge failed: ${message}`,
				};
			}
		}

	return null;
}

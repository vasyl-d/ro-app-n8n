# n8n-nodes-roapp

This is an n8n community node. It lets you use [ROapp.io API](https://roapp.readme.io/) and [Orderry API](https://orderry.readme.io/) in your n8n workflows.

ROapp.io is a comprehensive business management platform that helps companies manage their operations including orders, invoices, bookings, customers, inventory, and more.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/reference/license/) workflow automation platform.

[Installation](#installation)  
[Operations](#operations)  
[Credentials](#credentials)  
[Compatibility](#compatibility)  
[Usage](#usage)  
[Resources](#resources)  
[Version history](#version-history)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Credentials

To use this node, you need to create [ROapp.io API](https://roapp.readme.io/) or [Orderry.com](https://app.orderry.com) credentials:

1. Sign up for a ROapp.io or Orderry account at https://roapp.io/ or https://app.orderry.com
2. Get an API access token from your account settings
3. In n8n, create new credentials of type "Roapp API" or "Orderry API"
4. Enter your Access Token in the credentials form

The node uses Bearer token authentication, automatically adding the `Authorization: Bearer <your_token>` header to all API requests.

## Operations

The Roapp node supports the following resources and operations:

### Core Operations (available for most resources)
- **Get All**: Retrieve multiple records with filtering and pagination
- **Get**: Retrieve a single record by ID
- **Create**: Create a new record
- **Update**: Update an existing record
- **Delete**: Delete a record

### Specialized Operations
- **Item Management**: For resources that support line items (Orders, Invoices, Bookings):
  - Create Item: Add an item to a parent record
  - Update Item: Modify an existing item
  - Delete Item: Remove an item from a parent record
- **Status Updates**: Update the status of records (e.g., order status, invoice status)
- **Comments**: Add comments to records
- **Additional Operations**: Specific to certain resources (e.g., Get Public URL for orders, Get Types, Get Statuses)

## Compatibility

- **Minimum n8n version**: 2.16.1
- **Tested against**: n8n 2.16.1+
- **Known incompatibilities**: None reported

## Usage

### Basic Workflow Example
1. Set up your ROapp credentials as described above
2. Add the Roapp node to your workflow
3. Select the desired resource (e.g., "Invoice")
4. Choose the operation (e.g., "Create")
5. Configure the required fields for the operation
6. Connect the node to other nodes in your workflow as needed

### Handling Pagination
When using "Get All" operations, you can:
- Set "Return All" to automatically paginate through all results
- Or set a specific "Limit" to control how many records are returned

### Working with Custom Fields
The node automatically handles custom fields for supported resources through the resource mapping feature.

## Resources

The Roapp node provides access to the following [ROapp.io API](https://roapp.readme.io/) / [Orderry.com](https://app.orderry.com) resources:

### Business Operations
- **Orders**: Manage customer orders, including items, status, payments
- **Invoices**: Create and manage invoices, invoice items, and payment tracking
- **Bookings**: Handle service bookings, appointments, and reservations
- **Sales**: Track sales opportunities and pipeline management

### Customer & Contact Management
- **Persons**: Manage individual customer/contact records
- **Organizations**: Manage business accounts and company contacts
- **Leads**: Track potential sales leads and prospects

### Product & Inventory
- **Catalog**: Manage products and services
- **Assets**: Track company assets and equipment
- **Warehouse**: Manage inventory and warehouse operations

### Company & Configuration
- **Company**: Access company information and settings
- **Marketing**: Access marketing campaign data and analytics
- **Deduplication**: Manage duplicate detection and merging rules

### Common Fields Across Resources
Most resources support standard fields like:
- ID, creation/update timestamps
- Status and type classifications
- Monetary values (prices, amounts, taxes)
- References to related resources (customer IDs, product IDs, etc.)
- Custom fields (configured in your ROapp.io account)

## Version history

### Version 1.0.0
- Initial release
- Support for all major [ROapp.io API](https://roapp.readme.io/) / [Orderry.com](https://app.orderry.com) resources
- Full CRUD operations for each resource
- Specialized operations for line items, status updates, and comments
- Custom field handling and resource mapping
- Secure authentication via Access Token
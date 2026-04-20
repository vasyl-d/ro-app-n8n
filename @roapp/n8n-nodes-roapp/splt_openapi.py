import json
import os

# Вкажіть ім'я вашого файлу
INPUT_FILE = 'ro-app-public-api-v2.json'
OUTPUT_DIR = 'roapp_api_docs'

if not os.path.exists(OUTPUT_DIR):
    os.makedirs(OUTPUT_DIR)

with open(INPUT_FILE, 'r', encoding='utf-8') as f:
    data = json.load(f)

paths = data.get('paths', {})

# Групування
for path, methods in paths.items():
    for method, details in methods.items():
        # Беремо перший тег або 'general', якщо тегів немає
        tag = details.get('tags', ['general'])[0]
        print(path)
        f = path[1:] if path.startswith("/") else path
        p = f.split("/")[0] or f
        filename = f"{OUTPUT_DIR}/{p.lower()}.md"
        # filename = f"{OUTPUT_DIR}/{tag.lower()}.md"
        
        with open(filename, 'a', encoding='utf-8') as f_md:
            f_md.write(f"### {method.upper()} {path}\n")
            f_md.write(f"**Summary:** {details.get('summary', 'No summary')}\n\n")
            f_md.write(f"### Parameters for {method.upper()} {path}\n")
            f_md.write(f"```json\n{json.dumps(details.get('parameters', {}), indent=2)}\n```\n\n")
            f_md.write(f"### Response for {method.upper()} {path}\n")
            f_md.write(f"```json\n{json.dumps(details.get('responses', {}), indent=2)}\n```\n\n")
            f_md.write("---\n\n")

print(f"Готово! Файли збережено в папку {OUTPUT_DIR}")

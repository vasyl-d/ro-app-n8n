#!/bin/zsh
# My batch script

echo "Starting batch process..."

# Your commands here
cd /Users/vasyl/ROapp/n8n/ro-app-n8n/@roapp/n8n-nodes-roapp
npm run build && npm link  
export N8N_CUSTOM_EXTENSIONS="$(pwd)/dist"
n8n start 

echo "Batch complete!"
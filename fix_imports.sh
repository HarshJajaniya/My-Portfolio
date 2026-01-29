#!/bin/bash

# Fix imports by removing version numbers from package imports
# Pattern: @package-name@version -> @package-name
# Also handle: package-name@version -> package-name

find src/components/ui -name "*.tsx" -type f | while read file; do
  sed -i '' -E 's/from "(@[a-z-]+\/[a-z-]+)@[0-9.]+"/from "\1"/g' "$file"
  sed -i '' -E 's/from "([a-z-]+)@[0-9.]+"/from "\1"/g' "$file"
done

echo "Fixed imports in all UI component files"

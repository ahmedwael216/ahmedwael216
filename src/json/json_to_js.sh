#!/bin/bash

# Check if an argument was provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 [filename]"
    exit 1
fi

# Get the filename from the first argument
filename="$1"

# Check if the filename ends with '.json'
if [[ $filename == *.json ]]; then
    base_name="${filename%.json}"
else
    base_name="$filename"
fi

# Define file names
json_file="${base_name}.json"
js_file="${base_name}.js"

# Check if the JSON file exists
if [ ! -f "$json_file" ]; then
    echo "Error: File '$json_file' not found."
    exit 1
fi

echo "module.exports = $(cat "$json_file");" > "$js_file"

echo "Conversion completed: $json_file -> $js_file"

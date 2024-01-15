#!/bin/bash

input_file="./blogPosts.json"
output_file="extendedBlogPosts.json"
max_entries=2000

json_array=$(cat "$input_file")

json_array="${json_array:1:-1}"
# Duplicate entries until the desired length is approximated
extended_json_array=$json_array
for (( i=1; i<$max_entries; i++ ))
do
  # Adding a comma for JSON format and then the array content
  extended_json_array+=",${json_array}"
done

# Add the opening and closing brackets
extended_json_array="[$extended_json_array]"

# Write to the output file
echo "$extended_json_array" > "$output_file"

echo "Extended JSON created with approximately $max_entries entries."

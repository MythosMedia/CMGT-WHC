#!/bin/bash

HOST='ftp.testsite1.ca'
USER='site1'
PASS='Ayman2024'
REMOTE_DIR='/public_html'
LOCAL_DIR='.'

# Function to upload a single file
upload_file() {
  local file=$1
  curl -T "$file" -u $USER:$PASS --ftp-ssl-reqd --ftp-pasv --insecure ftp://$HOST$REMOTE_DIR/$(basename "$file")
}

# Function to check if a file needs to be uploaded
needs_upload() {
  local file=$1
  local remote_md5
  local local_md5

  # Get the MD5 hash of the remote file
  remote_md5=$(curl -s -u $USER:$PASS --ftp-ssl-reqd --ftp-pasv --insecure ftp://$HOST$REMOTE_DIR/$(basename "$file").md5)
  
  # Get the MD5 hash of the local file
  local_md5=$(md5sum "$file" | awk '{ print $1 }')

  # Compare the hashes
  if [ "$remote_md5" != "$local_md5" ]; then
    return 0  # File needs to be uploaded
  else
    return 1  # File does not need to be uploaded
  fi
}

# Upload changed files
for file in $(find $LOCAL_DIR -type f); do
  if needs_upload "$file"; then
    echo "Uploading $file..."
    upload_file "$file"
    
    # Upload the MD5 hash of the file
    md5sum "$file" | awk '{ print $1 }' | curl -T - -u $USER:$PASS --ftp-ssl-reqd --ftp-pasv --insecure ftp://$HOST$REMOTE_DIR/$(basename "$file").md5
  else
    echo "No changes in $file."
  fi
done

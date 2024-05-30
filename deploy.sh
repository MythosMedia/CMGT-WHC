#!/bin/bash

HOST='ftp.testsite1.ca'
USER='site1'
PASS='Ayman2024'
REMOTE_DIR='/public_html'

# Local directory containing your website files
LOCAL_DIR='.'

lftp -f "
open $HOST
user $USER $PASS
mirror -R $LOCAL_DIR $REMOTE_DIR
bye
"

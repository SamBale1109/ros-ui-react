#!/bin/bash

# Print a message
echo "Starting my script..."
echo "runing npm install"
npm install
echo "runing npm run build"
npm run build
echo "change dir to /example"
ls
cd example
echo "runing npm install"
npm install
echo "running npm start"
npm start

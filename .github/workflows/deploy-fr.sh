#!/bin/bash
# Stop on error
set -e
# Load nvm
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
# Move to folder with the apps from the github
cd /root
# Clone the repo
git clone <your-git-repo-link>
# Move to specific repo
cd /root/<name-of-repo>
# Install Node.js
nvm install
# Check node version
node -v
# Check npm version
npm -v
# Install dependencies
npm install --force
npm ci --force
# Build application
npm run build
# Move build to the www folder
cp -rf /root/<your-project-name>/dist/* /var/www/default
# Remove repo
rm -rf /root/<your-project-name>
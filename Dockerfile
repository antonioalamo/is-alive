# Use a node 16 base image
FROM registry.access.redhat.com/ubi8/nodejs-16:latest

# Create the app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Start the app
COPY . .
ENTRYPOINT ["npm", "start"]

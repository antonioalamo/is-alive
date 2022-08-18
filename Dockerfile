# Use a node 16 base image
FROM node:16-alpine3.15

# Create the app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Start the app
COPY . .
ENTRYPOINT ["npm", "start"]

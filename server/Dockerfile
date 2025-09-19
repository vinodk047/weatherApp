# Dockerfile for the server
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the code
COPY . .

# Expose port from environment or default to 5000
EXPOSE ${PORT:-5000}

# Start server
CMD ["node", "index.js"]
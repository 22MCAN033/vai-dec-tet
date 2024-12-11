# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Give executable permissions to all binaries in node_modules/.bin
RUN chmod +x /app/node_modules/.bin/*

# Ensure correct ownership of files
RUN chown -R node:node /app

# Switch to the non-root user (optional but recommended)
USER node

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

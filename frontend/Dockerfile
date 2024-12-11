# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install
# Grant execute permissions to all binaries in node_modules/.bin
RUN chmod -R +x /app/node_modules/.bin

# Ensure ownership is correct (useful for CodeDeploy cases)
RUN chown -R node:node /app


# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

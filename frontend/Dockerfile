# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) to install dependencies
COPY package*.json ./

# Install dependencies, including react-scripts
RUN npm install

# Explicitly ensure react-scripts is installed and set permissions
RUN npm install react-scripts --save
RUN chmod -R +x /app/node_modules/.bin/

# Ensure correct ownership of files
RUN chown -R node:node /app

# Copy source code
COPY . .

# Switch to non-root user
USER node

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

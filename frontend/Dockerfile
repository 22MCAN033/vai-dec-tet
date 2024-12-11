# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install
# Give executable permission to react-scripts (fix permission issue)

RUN chmod +x /app/node_modules/.bin/react-scripts
# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

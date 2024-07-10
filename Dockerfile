# Use the official Node.js image with a specific version (replace if needed)
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy the package.json file (assuming your dependencies are listed there)
COPY package.json ./

# Install dependencies using npm
RUN npm install

# Copy your server.js file and any other application files
COPY . .

# Expose the port your server listens on (replace if needed)
EXPOSE 3000

# Start the application using the command you specify (replace if needed)
CMD [ "node", "server.js" ]

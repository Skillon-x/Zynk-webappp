# Use official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app
COPY . .

# Expose the port your server is running on
EXPOSE 5001

# Command to start the Node.js server
CMD ["node", "index.js"]

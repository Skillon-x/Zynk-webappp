# Use official Node.js image
FROM node:18

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app for production
RUN npm run build

# Install serve to serve the static files
RUN npm install -g serve

# Command to serve the app (use the build folder for production)
CMD ["serve", "-s", "build"]

# Expose port 3001 to access the frontend outside the container
EXPOSE 3001

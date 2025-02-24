# Use the base image of Node.js
FROM node:18-alpine AS development

# Set the working directory inside the container
WORKDIR /callupe_roger_ui_garden

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the application for production (Storybook)
RUN npm run build-storybook

# Stage 2: Serve the application with a static web server
FROM nginx:alpine

# Copy the built files from the development stage
COPY --from=development /callupe_roger_ui_garden/storybook-static /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8083
EXPOSE 8083

# Command to start Nginx
CMD ["nginx", "-g", "daemon off;"]
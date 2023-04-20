# Use official Node.js image as base image
FROM node:16-alpine

# Set environment variables
ENV NODE_ENV=production

# Create app directory and set it as the working directory
WORKDIR /app

# Copy package.json and yarn.lock files to the container
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn

# Copy the source code to the container
COPY . .

# Start the bot using the start:prod script
CMD ["yarn", "start:prod"]

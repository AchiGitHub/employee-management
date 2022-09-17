# Base Image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Create a production build
RUN npm run build

CMD ["node", "dist/main.js"]


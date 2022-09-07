FROM node:8

# Create app-client directory
WORKDIR /usr/src/app

# Install app-client dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install --only=production
RUN npm install pm2 -g
# Bundle app-client source
COPY .. .

EXPOSE 3000

CMD [ "pm2-runtime", "npm", "--", "start" ]
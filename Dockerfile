FROM node:18-alpine

# folder kerja di container
WORKDIR /app

# copy file dependency
COPY package*.json ./

# install dependency
RUN npm install --production

# copy semua source code
COPY . .

# port yang dipakai app
EXPOSE 3000

# command saat container jalan
CMD ["node", "index.js"]

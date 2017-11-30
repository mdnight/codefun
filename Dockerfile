from node:carbon
maintainer mdnight
expose 3000

workdir /usr/src/app
copy . .
run npm install && npm run build

cmd ["npm", "start"]

FROM node:lts-alpine
RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot
WORKDIR /srv/app
COPY package.json ./
COPY tsconfig.json ./
COPY nodemon.json ./
COPY src ./src
# // @SONAR_STOP@
RUN npm install
# // @SONAR_START@
RUN npm run build
EXPOSE 3001
USER nonroot
CMD ["npm", "run","start"]
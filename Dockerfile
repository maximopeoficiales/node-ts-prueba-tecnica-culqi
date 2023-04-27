FROM node:lts-alpine
RUN addgroup -S nonroot \
    && adduser -S nonroot -G nonroot
WORKDIR /srv/app
COPY package.json ./
COPY tsconfig.json ./
COPY src ./src

RUN npm install
RUN npm run build
EXPOSE 3001
USER nonroot
CMD ["node", "dist"]
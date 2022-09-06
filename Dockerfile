# Naively Simple Node Dockerfile

FROM node:14.17-alpine

RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app
COPY --chown=node:node aurora .

USER node

RUN npm ci
RUN npm run prisma:generate
RUN npm run build

EXPOSE 3000
CMD [ "npm", "start" ]

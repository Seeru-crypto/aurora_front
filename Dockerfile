FROM node:21.4.0

ARG NEXT_PUBLIC_VERSION_NUMBER
ENV NEXT_PUBLIC_VERSION_NUMBER=${NEXT_PUBLIC_VERSION_NUMBER}
RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app
COPY --chown=node:node . .

USER node
ENV NEXT_TELEMETRY_DISABLED 1
ENV HOSTNAME "0.0.0.0"
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD [ "wget", "-q0", "http://localhost:3000/api/health" ]

RUN npm ci
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]
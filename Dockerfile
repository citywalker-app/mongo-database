FROM mongo:latest as prod

ARG MDB_USERNAME
ARG MDB_PASSWORD

ENV MONGO_INITDB_ROOT_USERNAME=$MDB_USERNAME
ENV MONGO_INITDB_ROOT_PASSWORD=$MDB_PASSWORD

RUN mkdir -p /docker-entrypoint-initdb.d

COPY ./init/mongo-init.js /docker-entrypoint-initdb.d/mongo-init.js

EXPOSE 27017

FROM mongo:latest as test

ENV MONGO_INITDB_ROOT_USERNAME=test
ENV MONGO_INITDB_ROOT_PASSWORD=test

RUN mkdir -p /docker-entrypoint-initdb.d

COPY ./init/mongo-init.js /docker-entrypoint-initdb.d/mongo-init.js

EXPOSE 27017




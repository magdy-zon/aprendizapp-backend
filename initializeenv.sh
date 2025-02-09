#! /bin/bash -xe

# load variables for work locally with this env
source runserver.sh

# update nvm (with version <22.10.0>)
nvm use

# run a mongo container example
docker run -d \
  --name mongodb-container \
  -p 27017:27017 \ 
  -e MONGO_INITDB_ROOT_USERNAME=admin \
  -e MONGO_INITDB_ROOT_PASSWORD=adminpassword \
  mongo
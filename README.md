
# Aprendizapp Backend
## Working with the project

Install the dependencies.

```sh
npm run init
```

Load the env variables.

Create a bash file with the name `<fileName>.sh` and add your own configuration. You can use the reference in `runserver.sh.example` file.

If you are in Windows console run it with:
```sh
source  <fileName>.sh
```

If you are in a Unix console, you can use:
```sh
source  <fileName>.sh
```

Run the project.
```sh
npm run start
```

You should see the next output:
```
lerna notice cli v5.1.0  
lerna info Executing command in 1 package: “npm run start”  
@clean/api: > @clean/api@1.0.0 start  
@clean/api: > node -r ts-node/register ./dist/server.js  
@clean/api: info: the database connection to mongodb://127.0.0.1:27017 aprendizapp-be has been successfully  
@clean/api: info: init cors config  
@clean/api: info: Server listening on port 3140
```


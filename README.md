
# Contratame API Project

## Prerequisites

Be sure to use the last version for node and npm

Recommended version for work:
npm v10.0.0+
node v22.0.0+

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


# Database

The project use a MongoDB and a mongoose ORM to work with collections manipulations

## Migrations

If you create a migration, you can run it with the comand:

```
npm run migrate:up
```


# Layered Architecture

"The most common architecture pattern is the layered architecture pattern, otherwise known as the n-tier architecture pattern. This pattern is the de facto standard for most Java EE applications and therefore is widely known by most architects, designers, and developers. The layered architecture pattern closely matches the traditional IT communication and organizational structures found in most companies, making it a natural choice for most business application development efforts."

-- [O'Really](https://www.oreilly.com/library/view/software-architecture-patterns/9781491971437/ch01.html)

![sapr_0101](https://github.com/magdy-zon/aprendizapp-backend/assets/609756/8f247b16-850f-413c-a4a7-3f8620bd41ba)



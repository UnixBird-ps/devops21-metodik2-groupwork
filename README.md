# devops21-metodik2-groupwork

A school assignment group work on CI/CD for course DevOps Metodik 2 using Docker.  
  
  
  
  
  
  
  
  
Hello developer!

This is a message from your friendly DevOp!

## Exciting times!
Finally we are moving from a monolith application development model to systems built upon microservices.

This means that we need a new development environment and build system where the teams working in the same main project, but with different services can separate their code and run it on different servers!

For this purpose we have chosen Docker in conjunction with our own setup for automating Docker.

We will start with 
* different teams in teh same main project having the code for their service in specific branches.
* your team can create as many branches you want, but you start with branching out the main branch and call your base branch "main-service-name".
* then you can create dev and feature branches according to the same naming convention (dev-service-name, feature-some-feature-service-name etc).

**Note:** Should we need to separate the code further we might move each service into separate repositories. But we will wait with doing that.

## How to get started!
Checkout the docker branch and run the following command in your terminal:

```
./create-docker-tools.sh
```

This will give you two shell scripts (that are git-ignored and thus available in all branches):

```
# start all Docker containers
./start
```

```
# stop all docker containers
./stop
```

(You will also see a git ignored folder called docker-tools. There is *no need* for you to work in this folder.)

## In your branch

### Create a Dockerfile
Make sure there is: A file named **Dockerfile** which specifies at least:
* a base image (FROM) 
* and a command to run (CMD) when the server starts.

Example:

```
# start with a debian node image
FROM node:16.15-buster

# run necessary start commands
CMD npm install && node index
```

**Important:** - do not specify a WORK DIR. It will be set to where the code for your branch is checked out within Dockers container/named volume systems automatically.

### Create a dockerSettings.json file
The dockerSettings.json should contain info about which branches you want to create containers from (your own one and other branches with services you want to communicate with) and on which port they should be running:

```json
[
  "dev-frontend",
  [
    4001
  ],
  "main-frontend",
  [
    4000
  ]
]
```

**Coming soon:** You will soon be able to add proxy routes for the reverse proxy alongside the port numbers as well!


### Important! Listen to the environment variable PORT when you start your service!

The system sends an environment variable called PORT to your container (each branch runs in a container that you setup by writing a Dockerfile in your branch).

Start your service on this port!

### I don't know how to start my service on a specific port

Since you are in control of your microservice and its technology stack it is up to you investigate how to start in on a particular port, but here are some suggestion for technologies we know are going to be used in this project

#### React using the Vite development server

In your **config.vite.js** file:

```js
export default defineConfig({
  plugins: [react()],
  server: {
    // use process.env.PORT
    // to read the environment variable
    port: process.env.PORT
  }
})
```

#### Node.js/Express

```js
// Where you start your Express server
app.listen(process.env.PORT)
```

#### For database containers etc
Create a separate branch with your Dockerfile (and backup like SQL-dumps etc).

Refer to the documentation about the container you are using (MySQL, MariaDB, MongoDB etc) for how to start the db server on a particular port!

**Important!** If the server/service needs a command line argument rather than an environment variable to set the port it is starting on -  refter to the Docker documentation on how to read environment variables in your Dockerfile and pass them along as comman line arguments in your start CMD!

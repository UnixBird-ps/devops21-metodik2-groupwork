# devops21-metodik2-groupwork

A school assignment group work on CI/CD for course DevOps Metodik 2 using Docker.    
  
Hello developer!

This is a message from your friendly DevOps team!

## Exciting times!
Finally we are moving from a monolith application development model to systems built upon microservices.

This means that we need a new development environment and build system where the teams working in the same main project, but with different services can separate their code and run it on different servers!

For this purpose we have chosen Docker in conjunction with our own setup for automating Docker.

We will start with 
* different teams in the same main project having the code for their service in team specific branches. The following are the protected branches:
  * template-dev (for DevOps team's use)  
  * dev-iframer (for iframer team)
  * dev-world-map-backend (for world-map team)
  * dev-country-info-backend (for countries team)
  * dev-country-info-db (db for countries team)
  * dev-capitals-backend (for capitals team)
  * dev-capitals-db (db for capitals team)
  * dev-proxy 
* your team can create as many branches you want, but you start with branching out from your team's dev branch and call your working branch "dev-[team name]-work-[your name/initials]".
  * then you can create further dev and feature branches according to the same naming convention (feature-[team name]-[feature desc] etc.)

**Note:** Should we need to separate the code further we might move each service into separate repositories. But we will wait with doing that until the project is big enough.

## For our lovely Developers:
## How to get to working in this environment!
Start by cloning this repo, if you have not already. If you are already familiar with git, please skip to Selecting a team branch for further instructions on naming convention and branching strategy.
### Cloning the repo
Start by cloning the repo into a directory: 
Pick/create a location/directory on your computer where your local repository will reside. Through the commandprompt, go to that location/directory. 
Write the following git command, and press enter (this will automatically start setting up your local repository.)

    git clone https://github.com/UnixBird-ps/devops21-metodik2-groupwork.git

Now you can open this repository folder in Visual Studio Code. Make sure to open the folder that matches the name of the repository and not the folder in which you placed it.

### *Selecting a team branch*
  You can go to your team's corresponding branch by writing the following in the terminal/command prompt:

      git checkout [name-of-branch]
  You can also use the command palette in VS Code by clicking on the branch name in the bottom-left corner, and a drop-down list of all the available branches (local and remote) will appear. Choose one and hit enter.

### *Create your own working branch*
  AFTER YOU MAKE SURE YOU ARE IN your team's dev branch, you can create one for yourself  by doing the following in the command prompt:

      git checkout -b [dev-[team name]-work-name]

  You can also do this with command palette in VS Code: AFTER YOU MAKE SURE YOU ARE IN your team's dev branch, you select "+ Create new branch..." and after you select it, in the same line box that appears you will write the name of your branch following this naming convention:

      dev-[team name]-work-[your name/initials]
  Hit enter and a branch will have been created from the branch you were currently on (which should have been your team's). Publish your branch to the remote repository and start working your feature.

### *Create your own proxy branch*
  You will need your own proxy branch so that you can make changes to it. Follow the same steps as above but instead use dev-proxy as your starting point to branch out from.

## How many branches will I need to be concerned with?
Good question! You will need a *minimum of 2 branches*: a working branch (from your team's dev branch) and your own proxy branch (you will create a branch off of dev-proxy). 

If you are in a team with a database, you will need an additional branch for the database.

The proxy branch is used to bring everything together and in it we match the branch names and ports that we are going to use in our working branch. 

## Docker tools you will use:

You will only ever run the following script once: 
```
./create-docker-tools.sh
```
This will give you two shell scripts based upon the settings in your branch(that are git-ignored and thus available in all branches): the start and stop scripts. More on those later in this chapter.

You will also see a **dockerSettings.json** file. The dockerSettings.json is where you will select which branches you want to create containers from (your own one and other branches with services you want to communicate with) and on which port they should be running on your local computer:
For example:
```json
[
  "dev-proxy",
  [
    4000
  ],
  "dev-iframer",
  [
    4001
  ],
  "dev-world-map-backend",
  [
    4002
  ]
]
```
***Please note***: These dockersettings are important that you 


**Start** does what it indicates, it will start a script we have prepared for you that will start all the Docker containers you want to be able to use.
From a bash terminal, you can run the following command:
```
./start
```
Please note: The very first time you run the start script, it will fail (on purpose.) This is because you need to provide an ssh-key. The ssh-key will be generated for you in the script. 

Please follow the instructions in the script for how to add it to your git repo. After it is saved in your repo, run the **start** script again to get your containers up and running.

**Stop** similarly stops all the docker containers and removes all docker related content.
From a bash terminal, you can run the following command:
```
./stop
```
(You will also see a git ignored folder called docker-tools. There is *no need* for you to work in this folder.)

### Checking to see if my containers are up:
You can use the following command in the terminal:

    docker ps

This will list all the running containers, including their names and ports used. If you see your container names, but no port information, then they are running, but not linked to your computer's ports (& therefore of no use to you yet.) If you do not see them at all, something is also not entirely synced up. In either case, please refer to the next section for areas to check when trouble-shooting.



## Why are my containers not working?
There are 3-4 things we need to do to make sure everything is in sync:

In our working branch, we need to do:
Step 1) Make sure the branches and port numbers in our dockerSettings.json in our working branch are the ones we want to see. (screenshot 1). Just know that we can only have 1 working container per frame used (that is, beside the database containers, we can only have 1 working container per world-map, 1 per countries & 1 per capitals). 
The branch names will need to match up with what is in the proxy branch (more on that in steps 2 and 3 below). 

**For capitals team:** Step 1a)  In your working branch, we also need to update the database container name in the dbConnect.js file if the container name/branch is changed. 

In the proxy branch, we need to do the remaining: 
Step 2) Change the nginx config file to match the proxy-pass path with the container name that are listed in the dockerSettings file in our working branch.  

Step 3) We also need to change Dockerfile in our proxy branch to update the environment variable ports to match the port numbers we are going to use in our working branch.



**Important!** 
If you have any questions or need a different type of container, please ask the devops-team behind the setup and they can help you create a new container. 




------------------------------------

## For DevOps team
### Create a Dockerfile
For each branch from which we want to run a container, be sure there is: 

1) A file named **Dockerfile** which specifies at least:
* a base image (FROM) 
* and a command to run (CMD) when the server starts.
* for good practice and specific tags that you can use please search on https://hub.docker.com/ 

Example:

```
# start with a debian node image
FROM node:16.15-buster

# run necessary start commands
CMD npm install && node index
```

    **Important:** - do not specify a WORK DIR. It will be set to where the code for your branch is checked out within Dockers container/named volume systems automatically.

2)  The dockerSettings.json is important to allow the developers to choose services they want to communicate with and also on which port they should be running:

Example:
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
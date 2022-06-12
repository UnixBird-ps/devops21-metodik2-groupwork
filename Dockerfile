# start with a debian node container
FROM node:16.15-buster

# Run necessary start commands
CMD npm install && npm run dev
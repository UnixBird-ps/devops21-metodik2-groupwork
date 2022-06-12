# start with a debian node container
FROM node:16.15-buster

# Run necessary start commands
# npm run dev was requested by developers since this will allow them to work with vite & see changes as soon as they reload the page.
CMD npm install && npm run dev
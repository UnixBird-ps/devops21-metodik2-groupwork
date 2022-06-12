const express = require('express');
const path = require('path');
const dbConnect = require('./dbConnect');

// Start on 4000 if proxified by vite, otherwise environment variable PORT
let port = process.argv[2] === '--dev' ? 4000 : process.env.PORT;
port = port || 4000;// fallback to 4000 if no environment variable

async function start() {

  // get Capital model from dbConnect
  let { Capital } = await dbConnect();

  // create a server
  const app = express();

  // route for getting all capitals
  app.get('/api/capitals', async (req, res) => {
    res.json(await Capital.find());
  });

  // route for getting one capital by name
  app.get('/api/capitals/:country', async (req, res) => {
    let found = await Capital.findOne({ country: req.params.country });
    res.json(found);
  });

  app.use(express.static(path.join(__dirname, '../dist')));

  app.listen(port, () => console.log('Listening on http://localhost:' + port));

}

start();
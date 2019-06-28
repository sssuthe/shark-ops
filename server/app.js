const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");

const sampleConfig = require('./.samples.config.js');

const app = express()
    .use(cors())
    .use(bodyParser.json());

var baseRouter = require('./Routes/router');
app.use('/', baseRouter);


app.listen(sampleConfig.resourceServer.port, () => {
    console.log(`Shark-ops Resource Server Ready on port ${sampleConfig.resourceServer.port}`);
  });
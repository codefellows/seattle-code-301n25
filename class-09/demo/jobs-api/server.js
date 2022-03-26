"use strict";

// requires
const cors = require('cors');
require('dotenv').config()
const express = require('express');
const getJobs = require('./modules/jobs');
const notFound = require('./lib/notFound');

const app = express();

// middleware
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {
  response.send("testing testing...is this thing on???");
});

app.get('/jobs', getJobs);
app.use('*', notFound);


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

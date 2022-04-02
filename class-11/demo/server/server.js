'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const Cat = require('./models/cat');

const app = express();
app.use(cors());

// connect our MongoDB via Mongoose
mongoose.connect(process.env.DATABASE_URL);

// error handling for Mongo to tell you if you database is connected or not
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected')
});

const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {
  response.send('testing testing...is thing on???');
});

app.get('/cats', async (request, response) => {
  // find all the cats in the database
  const cats = await Cat.find({});

  // find all the cats with the location of Virgina
  // this is how you send a query to Mongo
  // const cats = await Cat.find({location: request.query.location});

  response.send(cats);
})

app.listen(PORT, () => console.log(`Listening in on PORT ${PORT}`));


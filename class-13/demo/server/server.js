'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const Cat = require('./models/cat');

const app = express();
app.use(cors());
// Use this line when creating a new document or else the req.body will be undefined
app.use(express.json()); // DON'T FORGET THIS LINE!

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

// create a new cat
app.post('/cats', async (request, response) => {
  // const newCat = request.body;
  // if request.body has everything you need in the right shape
  // then you can pass it straight to Model
  // But often you'll need to mold the data a bit

  const newCatinDB = await Cat.create(request.body);
  // console.log(request.body);
  response.status(201).send(newCatinDB);
});

// delete a cat
app.delete('/cats/:id', async (request, response, next) => {
  // const id = request.params.id;

  try {
    await Cat.findByIdAndDelete(request.params.id);
    response.status(204).send('cat was successfully deleted!');
  } catch(error) {
    console.error(error);
    next(error);
  }
});

// Update a cat
app.put('/cats/:id', async (request, response, next) => {
  try {
    // Model.findByIdAndUpdate(id, update, options)
    const updatedCat = await Cat.findByIdAndUpdate(request.params.id, request.body, {new: true});
    response.status(200).send(updatedCat);
  } catch (error) {
    console.error(error);
    next(error);
  }
})

// error handling middleware must be the last app.use()
app.use( (error, request, response, next )=>  {
  response.status(500).send(error.message);
});

app.listen(PORT, () => console.log(`Listening in on PORT ${PORT}`));


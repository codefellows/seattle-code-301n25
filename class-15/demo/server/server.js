'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./models/bookModel');
const verifyUser = require('./auth.js'); // lab 15

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3002;

mongoose.connect(process.env.MONGO_URL)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected')
});

app.get('/test', (request, response) => {
  response.send('test request received')
})

// This will run the "verify" code on every route automatically
// If the user is valid, we'll have them in request.user in every route!
// If not, it'll throw an error for us
app.use(verifyUser);

app.get('/books', handleGetBooks);
app.post('/books', handlePostBooks);
app.delete('/books/:id', handleDeleteBooks);
app.put('/books/:id', handlePutBooks);
app.get('/user', handleGetUser); // lab 15

async function handleGetBooks(req, res) {
  // instead of verifying the user email from the req.query we now get it from the verify user function
  // in 401, verifyUser will become middleware
  try {
    // make a query to Mongo asking it to find the books with an email that matches the req.user.email
    const books = await Book.find({ email: req.user.email }); 
    console.log('Books: ', books);
    res.status(200).send(books);
  } catch (error) {
    console.error(error);
    res.status(400).send('Could not find books');
  }
}


async function handlePostBooks(req, res) {
  const { title, description, status } = req.body;
  try {
    const newBook = await Book.create({ ...req.body, email: req.user.email })
    res.status(200).send(newBook)
  } catch (e) {
    res.status(500).send('server error');
  }
}

async function handleDeleteBooks(req, res) {
  const { id } = req.params;
  try {
    const book = await Book.findOne({ _id: id, email: req.user.email });
    if (!book) res.status(400).send('unable to delete book');
    else {
      await Book.findByIdAndDelete(id);
      res.status(204).send('bye book');
    }
  } catch (e) {
    res.status(500).send('server error');
  }
}

async function handlePutBooks(req, res) {
  const { id } = req.params;
  try {
    const book = await Book.findOne({ _id: id, email: req.user.email });
    if (!book) res.status(400).send('unable to update book');
    else {
      const updatedBook = await Book.findByIdAndUpdate(id, { ...req.body, email: req.user.email }, { new: true, overwrite: true });
      res.status(200).send(updatedBook);
    }
  } catch (e) {
    res.status(500).send('server error');
  }
}

// lab 15
// this is a route to verify the user
function handleGetUser(req, res) {
  console.log('Getting the user');
  res.send(req.user);
};

app.listen(PORT, () => console.log(`listening on ${PORT}`));

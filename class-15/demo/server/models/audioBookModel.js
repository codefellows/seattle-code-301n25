'use strict';
const mongoose = require('mongoose');
const { Schema } = mongoose;

// Schema defines the shape of the data
const audioBookModel = new Schema({
  title: String,
  description: String,
  status: String,
  email: String // lab 15
});

// model is a function that creates a new 'model' with a title that has certain methods available to it
const Book = mongoose.model('AudioBook', audioBookModel);

module.exports = Book;
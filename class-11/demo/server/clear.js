'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const Cat = require('./models/cat');

async function clear() {
  try {
    await Cat.deleteMany({});
    console.log('Cats deleted!');
  } catch(error) {
    console.error('something went terribly wrong when deleting: ', error);
  } finally {
    mongoose.disconnect(); 
  }
}

clear();

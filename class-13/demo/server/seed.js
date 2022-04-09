'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);

const Cat = require('./models/cat');

async function seed() {
  const myCat = new Cat({
    name: 'Luna',
    color: 'white w/grey',
    hasClaws: true,
    location: 'Virgina'
  });

  myCat.save(function (err) {
    if (err) console.error(err);
    else console.log('saved Luna!');
  });

  // alternatively...
  await Cat.create({
    name: 'Hammy',
    color: 'brown w/ black stripes',
    hasClaws: true,
    location: 'Bainbridge Island'
  });
  console.log('saved Hammy!');

  await Cat.create({
    name: 'Mac',
    color: 'grey',
    hasClaws: true,
    location: 'Silsbee'
  });
  console.log('saved Mac!');

  await Cat.create({
    name: 'Kai',
    color: 'white w/grey',
    hasClaws: true,
    location: 'Virgina'
  });
  console.log('saved Kai!');

  mongoose.disconnect(); 
}

seed();

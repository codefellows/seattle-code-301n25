'use strict';

// requires - these are the same as importing
// dotenv is the library that keeps our keys a secret
require('dotenv').config();
// express is the enviroment in which we build our server
const express = require('express');
// cors is the body guard of the internet - it protects our server from bad requests
const cors = require('cors');
// read in the shopping list from our dummy data
const shoppingList = require('./data/shopping-list.json');

// we are calling our Express library and assigning it to the app variable so we can use it to "get" end points (or routes) later
const app = express();

// define middleware - used for error handling
app.use(cors());

// this variable MUST be named exactly this bc Heroku looks for a variable named PORT when serving your code on it's platform
const PORT = process.env.PORT || 3002;

// get will get data from the end point(or the route) and send a response back
app.get('/', (request, response) => {
  response.send('hello from the home route!!');
});

// this class will be used to mold the data in a nice way for React to render easily
class List {

  constructor(listObj){
    this.items = listObj.items;
  }
}

app.get('/shopping-list', (req, res) => {
  const type = req.query.type;
  console.log('Query params', req.query);
  console.log('Type: ', type);
  const result = shoppingList.lists.find(list => list.listName === type);
  const newList = new List(result);
  console.log('Result: ', newList);
  // res.send('Hello from my SHOPPING LIST!!');
  res.status(200).send(result);
});

app.get('/async-error', (request, response, next) => {
  try {
    let listThatDoesntExist = require('./this-list-does-not-exist.js');
    response.send(listThatDoesntExist);
  } catch (error) {
    console.log('The error you are looking for: ', error);
    next(error);

    // this is what we call an anti-pattern. DO NOT handle errors inline, this is not the Express Way
    // response.status(500).send(error.message);
  }
});

// Handle what happens when we try to hit an end point that does not exsits
app.get('*', (req, res) => {
  res.status(404).send('these are not the droids you are looking for...');
});

// error handling middleware must be the last app.use()
app.use( (error, request, response, next) => {
  response.status(500).send(error.message);
});

// listen tells our express app what port to listen on
// app.listen MUST be the very last bit of code in the server file!
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

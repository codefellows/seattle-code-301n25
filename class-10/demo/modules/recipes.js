'use strict';

const axios = require('axios');
const cache = require('./cache');

module.exports = function getRecipes(request, response) {
  const ingredient = request.query.ingredient;
  const key = 'my-key:' + ingredient;

  if(cache[key] !== undefined){
    console.log('cache hit!');
    // if the info is in the cache, just use that data
    return cache[key];
  } else {
    console.log('cache miss!');
    // go the API and get the information
    const url = `https://api.edamam.com/search?q=${ingredient}&app_id=${process.env.FOOD_APP_ID}&app_key=${process.env.FOOD_APP_KEY}`;
    axios
    .get(url)
    .then(res => {
      const recipeArr = res.data.hits.map(recipe => new Recipe(recipe.recipe));
      // Add it to the cache
      cache[key] = recipeArr;
      console.log('cache: ', cache)
      response.status(200).send(recipeArr);
    })
    .catch(error => {
      // console.error('error', err);
      response.status(500).send('error');
    })
  }
}

class Recipe {
  constructor(recipe) {
    this.uri = recipe.uri;
    this.label = recipe.label;
    this.image_url = recipe.image;
    this.ingredients = recipe.ingredientLines;
    this.totalTime = recipe.totalTime;
  }
}

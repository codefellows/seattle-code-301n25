'use strict';

//requires
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const axios = require('axios');

const app = express();

// sets up our middleware for error handling
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (request, response) => {
  response.send('HELLO FROM THE OTHER SIDDDDDDEEE!');
});

app.get('/photos', getPhotos);

async function getPhotos(request, response) {
  const searchQuery = request.query.searchQuery;
  const url = `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_API_KEY}&query=${searchQuery}`;

  try {
    const photoResponse = await axios.get(url);
    const photoArr = photoResponse.data.results.map(photo => new Photo(photo));
    response.status(200).send(photoArr);
  } catch(error) {
    console.error(`error from axios: ${error}`);
    response.status(500).send('server error!!!');
  }
}

class Photo {
  constructor(obj) {
    this.img_url = obj.urls.regular;
    this.photographer = obj.user.name;
  }
}

app.listen(PORT, () => console.log(`Listening in on PORT ${PORT}`));

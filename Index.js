const Port = 8000;
const express = require('express');
const axios = require('axios');
const Cheerio = require('cheerio');

const app = express();

app.get('/', (req, res) => {
  res.json('Welcome to my Cheerio Api')
})

app.get('/news', (req, res) => {
  axios.get('https://www.theguardian.com/environment/climate-crisis')
    .then((res) => {
      const html = res.data
      console.log(html)
      
    })
    
})

app.listen(Port, () => {
  console.log(`Server running at Port ${Port}` )
})

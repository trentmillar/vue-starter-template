const express = require('express')
const moment = require('moment')
const app = express()

// Allow cross-domain requests (development only)
  if (process.env.NODE_ENV !== 'production') {
    console.log('------------------------------------------------');
    console.log('Notice: Enabling CORS for development.');
    console.log('------------------------------------------------');
    app.all('*', function (req, res, next) {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
    });
  }

app.get('/api/categories', (req, res, next) => {
  res.json({
    categories: ['This', 'That', 'The', 'Other']
  })
})

app.get('/api/products', (req, res, next) => {
  res.json({
    products: [
    {
      id: 123456789,
      image: "https://plaza.akamaized.net/133d/AajEnqKo_240.jpg",
      title: "Product Number One",
      price: 60.00,
      created: moment().subtract(1, 'd').toDate(),
      location: ''
    },
    {
      id: 0988765432,
      image: "https://plaza.akamaized.net/133d/AajEnqKo_240.jpg",
      title: "Product Number Two",
      price: 35.00,
      created: moment().subtract(1, 'h').toDate(),
      location: ''
    }
    ]
  })
})

const port = process.env.PORT || 8081
app.listen(port, () => {
    console.log(`server started at localhost:${port}`)
})

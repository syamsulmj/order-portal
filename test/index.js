const { GetAllOrders } = require('./src/lib/orders/GetAllOrders');

var express = require('express')
var app = express()

app.listen(3000, () => {
  console.log(`App listening to port '3000'`)
})

// GET method route
app.get('/', function (req, res) {
  GetAllOrders(req, res);
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})

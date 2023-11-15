
 const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello VM22!')
})

app.listen(3000);
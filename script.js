
 const express = require('express');
const app = express();
const nunjucks = require('nunjucks');


app.use(express.urlencoded())

app.get('/', function (req, res) {
  let name = req.query.name;
  let age = req.query.age;
  res.re('index.njk', {name, age})
});

app.post('/answer', function (req, res) {
  let name = req.query.name;
  let age = req.query.age;
  res.re('answer.njk', {name, age})
});

app.listen(3000);
console.log('Server started on http//localhost:3000');
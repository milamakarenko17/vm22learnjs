
 const express = require('express');
const app = express();
const nunjucks = require('nunjucks');

app.get('/', function (req, res) {
  let name = "Mila Makarenko";
  res.sendFile('index.njk', {name})
});

app.get('/', function (req, res) {
  res.render ('about.njk')
});

app.listen(3000);
console.log('Server started on http//localhost:3000');
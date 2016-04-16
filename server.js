var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function (req, res, next) {
  var root = path.join(__dirname, '/dist');
  res.sendFile('index.html', { root });
});

app.get('/details', function (req, res, next) {
  var root = path.join(__dirname, '/dist');
  res.sendFile('index.html', { root });
});

app.listen(process.env.PORT || 3000);

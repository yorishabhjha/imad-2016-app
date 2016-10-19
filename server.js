var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/about.html', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});

app.get('/pasha', function (req, res) {
  res.send(confirm("pashaa"));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/text.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'text.jpg'));
});

app.get('/ui/me.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'me.jpg'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

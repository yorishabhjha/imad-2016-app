var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var pentest = {
    title : 'Penetration testing',
    heading : 'Penetration testing',
    content :  `
                `,
};

function createTemplate(data){
    title = data.title;
    heading = data.heading;
    content = data.content;
    
    var html = `
    <html>
    <head>
    <title>
        ${title}
    </title>
        <link href="/ui/style.css" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <div id="title" h1>
            ${heading}
        </div>
        <nav>
            <ul>
                <li>
                    <a href="/ui/about.html">About</a>
                </li>
            </ul>
        </nav>
        <br><hr>
        <div>
            ${content}
        </div>
        <br><hr>
        <footer>
            Underconstruction
            &copy; yoRishabhJha 2016
        </footer>
        <script type="text/javascript" src="/ui/main.js">
        </script>
    </body>
</html>
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/about.html', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});

app.get('/pasha', function (req, res) {
  res.send(confirm("pashaa"));
});

var count = 0;
app.get('/count',function(req,res)
{
    count++;
    res.send(count.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
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

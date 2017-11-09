var express = require("express");
var app = express();
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post("/api/getId", function(req, res){
  var nId = { id : '123456' };
  res.json( nId );
});

app.post("/api/visitors", function (request, response) {
  var userName = request.body.name;
  response.send("Hello " + userName + "! I added you to the database.");
});

app.get("/api/visitors", function (request, response) {
  var names = [];
  names.push("prueba");
  response.json(names);
});

//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));

var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});

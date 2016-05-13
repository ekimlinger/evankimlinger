var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');
var router = require('./modules/index.js');
//var db = require('./server/db.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// ***************** IF USING A ROUTER *****************//
// app.use('/', router);

app.get("/*", function(req,res){
  var file = req.params[0] || "/assets/views/index.html";
  res.sendFile(path.join(__dirname,"/public/", file));
});

app.set("port",(process.env.PORT || 5000));

app.listen(app.get("port"),function(){
  console.log("Listening on port: ", app.get("port"));
});

module.exports = app;

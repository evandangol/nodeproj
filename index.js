var express = require('express');
var app = express();

app.get('/', function(req, res){
res.send("Hello world!");
});


app.get('/any', function(req, res){
    res.send("Hello any!");
    });
    

app.listen(3000);
console.log("hi");
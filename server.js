/**
 * Created by Nick on 2/13/2017.
 */
var express = require("express");
var app = express();
var path = require('path');

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname) + '/main/index.html');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000')
});

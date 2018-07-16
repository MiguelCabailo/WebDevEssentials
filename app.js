var express = require('express');
var app = express();


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendfile('index.html', { root: __dirname + "/public" } );
});

var port = 3000;
app.listen(port, function(){
    console.log("listening on port: http://localhost:" + port);
});

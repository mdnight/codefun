var express = require('express');
var path = require('path');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname+'/app/index.html'));
});

app.use('/static', express.static('dist'));

app.listen(3000, function() {
    console.log('Listening on port 3000...');
});

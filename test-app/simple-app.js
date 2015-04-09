/*
Simple exercise to learn Ajax and Servers!
(specifically express)
by bryden fogelman
*/

var express = require('express')
var app = express()

// tell the app to use the static express
app.use(express.static(__dirname + '/public'));
// set views to its directory
app.set('views', __dirname + '/public/views');
// use ejs to render the html file to the page, 
app.engine('html', require('ejs').renderFile);
// view engine to render to html
app.set('view engine', 'html');

// when the local host is loaded, it will load index
app.get('/', function (req, res) {
    res.render('index.html');
    //res.send('hello');
})

// have some hardcoded test to send once theres an ajax request
// at /people
app.get('/people', function (req, res) {
    var json_data = [{
       name: 'john smith',
       age: 25,
       citizenship: 'Canada'
    },
     {
       name: 'Bob Adams',
       age: 54,
       citizenship: 'USA'
    }];
    
    //sends the json response
    res.json(json_data);
    //res.send("hello world")
})

// I think the two below are interchangeable
// (with some minor differences)
// this requires some more investigation!
//app.listen(3000);
var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

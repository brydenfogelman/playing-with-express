var express = require('express')
var app = express()


/*
app.get('/', function (req, res) {
  res.send('Hello World!')
})
*/

//var __dirname = '/Users/brydenfogelman/Desktop/ghthouse/playing-with-express/test-app';

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/home', function (req, res) {
    res.render('index.html');
    //res.send('hello');
})

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
    //console.log('something: ' + JSON.stringify
    res.json(json_data);
    //res.send("hello world")
})

//app.listen(3000);

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})

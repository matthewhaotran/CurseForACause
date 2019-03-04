// Requires

const express = require('express');
const app = express();
var mysql = require('mysql')
const bodyParser = require('body-parser');

//Set up server

app.use(express.static(`${__dirname}`));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

app.get('/about', function (req, res) {
	res.sendFile(__dirname + '/public/about.html');
});

app.get('/cursehistory', function (req, res) {
	res.sendFile(__dirname + '/public/cursehistory.html');
});

app.get('/contact', function (req, res) {
	res.sendFile(__dirname + '/public/contact.html');
});

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

//Keep Heroku site live by pinging every 5 minutes

/*
var http = require("http");
setInterval(function() {
    http.get("http://curseforacause.herokuapp.com");
}, 300000); // every 5 minutes (300000)
*/

//Connect to DB

var db = mysql.createConnection({
  host     : 'us-cdbr-iron-east-01.cleardb.net',
  user     : 'ba2844b56811ac',
  password : '0acae961',
  database : 'heroku_f67894daeab864d'
});
  db.connect(
    console.log('Connected to Database')
  )

//GET route to retrieve balance

app.get('/getbalance', (req, res) => {

  let sql = 'SELECT * FROM Balance';
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results[0].Balance));
  });
});

//GET route to add to balance

app.get('/addbalance', function(req, res){
  var balance;
  var newBalance;
  db.query('SELECT * FROM Balance', (err, results) => {
    if(err) throw err;
    balance = parseFloat(JSON.stringify(results[0].Balance))
    newBalance = balance + 0.25;
    db.query('Update balance set balance=' + newBalance + ' where ID=1', (err, results) => {
      if(err) throw err;
    });
  });
  res.send(JSON.stringify(newBalance));
 });

//Interval to keep connection to DB alive
/*
setInterval(function () {
  db.query('SELECT 1');
}, 5000);
*/
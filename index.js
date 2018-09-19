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

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

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

//POST route to add to balance

app.get('/addbalance', function(req, res){
  db.query('SELECT * FROM Balance', (err, results) => {
    if(err) throw err;
    balance = parseFloat(JSON.stringify(results[0].Balance))
    newBalance = balance + 0.25;
    db.query('Update balance set balance=' + newBalance + ' where ID=1', (err, results) => {
      if(err) throw err;
    });
  });
  db.query('SELECT * FROM Balance', (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify(results[0].Balance));
  });
});
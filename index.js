const express = require('express');
const app = express();
var mysql = require('mysql')

//Set up server

app.use(express.static(`${__dirname}`));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

const port = process.env.PORT || 3000;

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

//Test Query of DB's Balance table

db.query('SELECT * FROM Balance;', function (err, results, fields) {
  let balanceTable = JSON.stringify(results[0]);
  console.log(balanceTable);
});

//Set up GET route for Balance

app.get('/getbalance', (req, res) => {
  let sql = 'SELECT * FROM Balance';
  let query = db.query(sql, (err, results) => {
    if(err) throw err;
    console.log(JSON.stringify(results[0]));
    res.send(JSON.stringify(results[0].Balance));
  });
});

app.post('/addtobalance', (req, res) => {
  res.send('Added to balance');
});
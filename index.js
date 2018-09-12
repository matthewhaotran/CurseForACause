const express = require('express');
const app = express();

app.use(express.static(`${__dirname}`));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/public/index.html');
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'us-cdbr-iron-east-01.cleardb.net',
  user     : 'ba2844b56811ac',
  password : '0acae961',
  database : 'heroku_f67894daeab864d'
});

connection.connect()

connection.query('SELECT * FROM Balance;', function (err, results, fields) {
  // error will be an Error if one occurred during the query
  // results will contain the results of the query
  // fields will contain information about the returned results fields (if any)
  console.log(JSON.stringify(results[0].Balance));
});

connection.end()
var mysql = require('mysql');
var connection;


	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'sammyly456',
		database: 'burgers_db'
	});



connection.connect(function(err) {
  if (err) {
    console.error('ERROR');
    return;
  }
 });

module.exports = connection;
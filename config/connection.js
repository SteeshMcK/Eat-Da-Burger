//DATABASE
var mysql = require('mysql');

var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BBto2941",
  database: 'k1huy7uprb3832k0'
});
};

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id:" + connection.threadId);
});
console.log(connection);


//EXPORT CONNECTION
module.exports = connection;
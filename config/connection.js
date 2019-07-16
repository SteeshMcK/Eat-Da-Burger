//DATABASE
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BBto2941"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
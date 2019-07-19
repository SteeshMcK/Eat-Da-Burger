//DATABASE
var mysql = require('mysql');

var connection;

if(true) {
  connection = mysql.createConnection('mysql://eiwh5dyfjicshby9:q0kjknm7mul14avp@o3iyl77734b9n3tg.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/k1huy7uprb3832k0');
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "BBto2941",
  database: 'burgers_db'
});
};

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected as id:" + connection.threadId);
});
console.log(connection);


//EXPORT CONNECTION
module.exports = connection;
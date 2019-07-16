var connection = require("./connection.js");

var orm = {

    selectAll: function(tableInput, cb) {
        console.log("tableInput", tableInput);
        connection.query('SELECT * FROM ' + tableInput + ';', function(err, res) {
            if(err) throw err;
            cb(result);
        })
    }

    // insertOne()

    // updateOne()

}


module.exports = orm;
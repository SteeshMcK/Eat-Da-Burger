var connection = require("./connection.js");

var orm = {

    selectAll: function(tableInput, cb) {
        // console.log("tableInput", tableInput);
        connection.query('SELECT * FROM ' + tableInput + ';', function(err, res) {
            if(err) throw err;
            cb(res);
        })
    },

    insertOne: function(tableInput, val, cb) {
        connection.query('INSERT INTO ' + tableInput + " (burger_name) VALUES ('"+ val +"');", function(err, result) {
            if(err)throw err;
            cb(result);
        })
        

    },

    updateOne: function(tableInput, condition, cb){
        connection.query('UPDATE ' + tableInput + ' SET devoured=true WHERE id=' + condition + ';', function(err, result){
            if(err)throw err;
            cb(result);
        })
    }

}


module.exports = orm;
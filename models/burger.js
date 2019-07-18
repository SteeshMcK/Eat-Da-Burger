var orm = require('../config/orm.js');

var burger = {
    selectAll: function(cb) {
        orm.selectAll('burger', function(res){
            cb(res);
        })
    },

    insertOne: function(name, cb) {
        orm.insertOne('burger', name, cb);
    },

    updateOne: function(id, cb){
        orm.updateOne('burger', id, cb);
    }
}


module.exports = burger;
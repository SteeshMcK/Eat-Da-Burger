const express = require('express');
const app = express();

var router = express.Router();

var burger = require('../models/burger.js');

//CREATE ROUTER AND EXPORT

router.get('/', function(req, res){
    burger.selectAll(function(burger_data){
        console.log(burger_data);
        res.render('index');
    })
})

module.exports = router;
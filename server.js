//REQUIRE EXPRESS

const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

//REFERENCE ROUTES.JS (IMPORT)
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var PORT = 3000;
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})
var express = require("express");
var bodyParser = require("body-parser");
var expressHandlebars = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var app = express();
var router = express.Router();

app.use(express.static(__dirname + "/public"));

app.engine("handelbars", expressHandlebars({
    defaultLayout: "main"
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

app.listen(PORT, function(){
    console.log("yes " + PORT);
});
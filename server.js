var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var expressHandlebars = require("express-handlebars");
var PORT = process.env.PORT || 3000;
var app = express();
var router = express.Router();

require("./config/routes")(router);

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(router);

var db = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(db, function(error){
    if (error){
        console.log(error);
    }
    else {
        console.log("yes");
    }
});

app.listen(PORT, function(){
    console.log("yes " + PORT);
});
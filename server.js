//Dependencies
var express = require("express");

//Sets up APP
var app = express();
var PORT = process.env.PORT || 3000;

//Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//API and HTML routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Starts our server to begin listening for client requests
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
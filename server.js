var express = require("express");
var path = require("path");
var app = express();
var port = process.env.PORT || 3000;
var htmlRoutes = require("./app/routing/htmlRoutes");
var apiRoutes = require("./app/routing/apiRoutes");
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
app.use(htmlRoutes);
app.use(apiRoutes);






app.listen(port, function(){
    console.log("app is listening on http://localhost:" + port);
    
});
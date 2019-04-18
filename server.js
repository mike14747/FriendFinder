"use strict";

var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var apiRoutes = require("./app/routing/apiRoutes.js");
app.use('/api', apiRoutes);

var htmlRoutes = require("./app/routing/htmlRoutes.js");
app.use('/', htmlRoutes);

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
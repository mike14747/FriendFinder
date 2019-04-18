"use strict";

var express = require('express');
var router = express.Router();

var friendsArray = require("../data/friends.js");

router.get("/friends", function (req, res) {
    // res.send('<h1>This is my test friends GET page!</h1>');
    res.json(friendsArray);
});
router.post("/friends", function (req, res) {
    
});
router.get("/test", function (req, res) {
    res.send('<h1>This is my test text!</h1>');
});
router.get("*", function (req, res) {
    res.status(404).send("<h1>This is a forbidden page</h1>");
});

module.exports = router;
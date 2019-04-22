"use strict";

var express = require('express');
var router = express.Router();

var friendsArray = require("../data/friends.js");

router.get("/friends", function (req, res) {
    res.json(friendsArray);
});

router.post("/friends", function (req, res) {
    var newfriend = req.body;
    for (let i=0; i<newfriend["scores"].length; i++) {
        newfriend["scores"][i] = parseInt(newfriend["scores"][i]);
    }
    res.json(friendsArray);
    friendsArray.push(newfriend);
    
});

router.get("*", function (req, res) {
    res.status(404).send("<h1>This is a forbidden page</h1>");
});

module.exports = router;
"use strict";

var express = require('express');
var router = express.Router();

var friendsArray = require("../data/friends.js");

var scoreHolder = 0;
var bestMatchID = 0;
var bestMatchScore = 0;
var matchArray = [];

router.get("/friends", function (req, res) {
    res.json(friendsArray);
});

router.post("/friends", function (req, res) {
    var newfriend = req.body;
    matchArray = [];
    for (let i = 0; i < newfriend["scores"].length; i++) {
        newfriend["scores"][i] = parseInt(newfriend["scores"][i]);
    }
    for (let i = 0; i < friendsArray.length; i++) {
        scoreHolder = 0;
        for (let j = 0; j < friendsArray[i]["scores"].length; j++) {
            scoreHolder += Math.abs(friendsArray[i]["scores"][j] - newfriend["scores"][j]);
        }
        if (i === 0) {
            bestMatchScore = scoreHolder;
            bestMatchID = i;
        } else {
            if (scoreHolder < bestMatchScore) {
                bestMatchScore = scoreHolder;
                bestMatchID = i;
            }
        }
    }
    matchArray.push(friendsArray[bestMatchID]["name"], friendsArray[bestMatchID]["photo_url"]);
    res.json(matchArray);
    friendsArray.push(newfriend);
});

router.get("*", function (req, res) {
    res.status(404).send("<h1>This is a forbidden page</h1>");
});

module.exports = router;
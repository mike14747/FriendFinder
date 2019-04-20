"use strict";

var friendsArray = [
    {name: "Olivia", photo_url: "Olivia_url", scores: [2, 4, 2, 4, 2, 4, 3, 3, 4, 1]},
    {name: "Amelia", photo_url: "Amelia_url", scores: [4, 2, 4, 2, 2, 4, 3, 4, 4, 5]},
    {name: "Isla", photo_url: "Isla_url", scores: [5, 4, 2, 5, 2, 3, 2, 3, 5, 3]},
    {name: "Emily", photo_url: "Emily_url", scores: [5, 3, 2, 2, 1, 4, 2, 2, 5, 4]},
    {name: "Ava", photo_url: "Ava_url", scores: [1, 3, 2, 4, 2, 3, 2, 4, 4, 4]},
    {name: "Lily", photo_url: "Lily_url", scores: [3, 2, 4, 2, 4, 4, 5, 5, 1, 4]},
    {name: "Mia", photo_url: "Mia_url", scores: [3, 2, 3, 4, 4, 2, 4, 4, 5, 3]},
    {name: "Sophia", photo_url: "Sophia_url", scores: [2, 2, 2, 3, 3, 4, 4, 1, 4, 2]},
    {name: "Isabella", photo_url: "Isabella_url", scores: [2, 2, 4, 3, 1, 3, 2, 2, 1, 4]},
    {name: "Grace", photo_url: "Grace_url", scores: [2, 4, 4, 1, 2, 4, 3, 1, 5, 2]},
    {name: "Oliver", photo_url: "Oliver_url", scores: [4, 2, 3, 4, 3, 2, 1, 4, 1, 2]},
    {name: "Harry", photo_url: "Harry_url", scores: [2, 5, 4, 5, 2, 1, 2, 1, 2, 3]},
    {name: "Jack", photo_url: "Jack_url", scores: [1, 1, 1, 5, 2, 4, 1, 4, 4, 3]},
    {name: "George", photo_url: "George_url", scores: [5, 4, 1, 4, 2, 4, 4, 3, 1, 5]},
    {name: "Noah", photo_url: "Noah_url", scores: [1, 4, 4, 2, 4, 5, 4, 3, 4, 4]},
    {name: "Charlie", photo_url: "Charlie_url", scores: [5, 2, 2, 3, 3, 4, 4, 1, 5, 5]},
    {name: "Jacob", photo_url: "Jacob_url", scores: [1, 1, 3, 4, 3, 1, 1, 5, 3, 1]},
    {name: "Alfie", photo_url: "Alfie_url", scores: [3, 3, 4, 4, 3, 4, 4, 2, 3, 4]},
    {name: "Freddie", photo_url: "Freddie_url", scores: [2, 4, 2, 4, 3, 3, 4, 5, 2, 1]},
    {name: "Oscar", photo_url: "Oscar_url", scores: [4, 4, 1, 4, 4, 2, 4, 1, 5, 2]}];

module.exports = friendsArray;

/*
var friends = ["Olivia", "Amelia", "Isla", "Emily", "Ava", "Lily", "Mia", "Sophia", "Isabella", "Grace", "Oliver", "Harry", "Jack", "George", "Noah", "Charlie", "Jacob", "Alfie", "Freddie", "Oscar"];
var friendsArray = [];
var scores = [];

for (let i=0; i<friends.length; i++) {
    scores = [];
    let obj = {};
    for (let a=1; a<=10; a++) {
        let randNum = Math.round(Math.random()*4)+1;
        scores.push(randNum);
    }
    obj.name = friends[i];
    obj.photo_url = friends[i] + "_url";
    obj.scores = scores;
    friendsArray.push(obj);
}
console.log(friendsArray);
*/
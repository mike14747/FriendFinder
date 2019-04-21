# FriendFinder

Friend Finder is a full-stack app/website that takes in results from user surveys, then compares the submitted answers with those from other users.

The user's best overall match will be displayed... including the name and picture of their closest friend match.

This project was very useful in learning express, the concept of url routing, the breaking up of a project into several files for simplicity and input validation.

---

### Overview of this project:

The url routing is handled in the apiRoutes.js and htmlRoutes.js files.
* The express.Router class was used as the middleware in both of these remote route handling files.
* Here's a code snippet showing the POST route and processing using the express.Router class as the middleware:
```
var router = express.Router();

router.post("/friends", function (req, res) {
    var newfriend = req.body;
    for (let i=0; i<newfriend["scores"].length; i++) {
        newfriend["scores"][i] = parseInt(newfriend["scores"][i]);
    }
    friendsArray.push(newfriend);
    res.json(friendsArray);
});

module.exports = router;
```

---

### How can you get started with this project?

* Anyone can deploy this project on their server, with no special instructions needed.
* To use this app locally on your computer:
  *  Clone this repository.
  *  Run 'npm i' from the terminal at the root directory.
  *  Run 'node server' from the terminal at the root directory to start this app's server.
  *  Open: 'localhost:3000' in your browser.

---

### This project was created and is maintained by:

* Mike Gullo
* https://github.com/mike14747
* Contact me at: mike4747@oh.rr.com for more info about this project.
# FriendFinder

Friend Finder is a full-stack app/website will take in results from user surveys, then compare their answers with those from other users.

The user's best overall match will be displayed... including their name and picture.

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
Then, back in the server.js file... here's how the above is utilized:
```
var apiRoutes = require("./app/routing/apiRoutes.js");
app.use('/api', apiRoutes);
```
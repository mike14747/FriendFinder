# FriendFinder

Friend Finder is a full-stack app/website that takes in results from user surveys, then compares the submitted answers with those from other users.

The user's best overall match will be displayed... including the name and picture of their closest friend match.

This project was very useful in learning express to start and utilize a server, the concept of url routing, the breaking up of a project into several files for simplicity and input validation.

---

### About this project's code:

* The user input for the name, photo url and question answers fields is validated the following ways:
```
// name field input validation is handled via a regular expression match of letters (upper or lower case), numbers, dashes and underscores
if (!$("#your_name").val().trim().match(/^[a-zA-Z0-9_-]{1,15}$/)) {

// photo url field input validation is done using a regular express test of whether the user input ends in .jpeg, .jpg, .gif or .png
if (!$("#photo_url").val().trim().match(/\.(jpeg|jpg|gif|png)$/)) {

// question answers are validated by checking that the value of the option in the select element has been set
```

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

An interest side note about the initial friendsArray array of possible friend matches... I wrote the following to seed the array with 20 fictitious people. It starts out with an array of 20 random names and another array of 20 random (and funny) photo urls I found online. I ran this script and used the resulting object as my friendsArray. You might notice that the random number generator that fills the scores for each randon person with random values doesn't use the standard Math.floor() approach. Instead, I used Math.round() with the thinking that 1's and 5's are typically input less than 2's, 3's or 4's. Using this Math.round() approach, the chances of each number being selected are:
* 1 - 12.5%
* 2 - 25%
* 3 - 25%
* 4 - 25%
* 5 - 12.5%
This code is not part of the app. I'm just including it here to point out how I seeded the initial friendsArray.
```
var friends = ["Olivia", "Amelia", "Isla", "Maude", "Ava", "Lily", "Mia", "Sophia", "Isabella", "Grace", "Oliver", "Bong", "Stubby", "George", "Noah", "Charlie", "Jacob", "Alfie", "Freddie", "Oscar"];
var friendsArray = [];
var photo_url = [
    "https://thewondrous.com/wp-content/uploads/2015/05/drunk-funny-people.jpg",
    "https://britishexpats.com/forum/attachments/lounge-7/93731d1276690729-ugly-people-world-uglypeople-12.jpg",
    "http://www.freakingnews.com/pictures/128000/Rodney-Dangerfield-as-an-Old-Woman--128364.jpg",
    "http://1.bp.blogspot.com/-GUfNKddTPjw/TiHqKtQsSZI/AAAAAAAABNs/dI20Fns-U5E/s1600/Funny+old+woman+1.jpg",
    "http://www.teamjimmyjoe.com/wp-content/uploads/2013/11/Onion.jpg",
    "http://cf.ltkcdn.net/seniors/images/std/204242-675x450-funelderlylady.jpg",
    "http://www.teamjimmyjoe.com/wp-content/uploads/2012/11/Funny-Mug-Shots-ugly-woman.jpg",
    "https://www.askideas.com/media/10/Old-Woman-Smoking-And-Making-Funny-Face-People.jpg",
    "https://i.pinimg.com/originals/86/29/39/86293972a918a15aa6ddef51c9249001.jpg",
    "https://www.askideas.com/media/36/African-Girl-With-Weird-Piercing-Face-Funny-Picture.jpg",
    "https://thewondrous.com/wp-content/uploads/2015/05/funny-pictures-of-ugly-people.jpg",
    "https://i.pinimg.com/originals/d0/a3/70/d0a370d019ba39d10ea6d64aabc63530.jpg",
    "https://i.ytimg.com/vi/iQTZCj0sm-U/hqdefault.jpg",
    "https://www.biography.com/.image/t_share/MTE5NDg0MDU1MTc0MDIyNjcx/darryl-f.jpg",
    "https://www.topbestpics.com/wp-content/uploads/2018/01/wtf-ugly-people.jpg",
    "http://4.bp.blogspot.com/_LK3Jc8YZXjs/TAOGaNLCy8I/AAAAAAAAWXo/XgC1xubhLq0/s1600/funny-gun-people-07.jpg",
    "https://cdn.acidcow.com/pics/20100714/people_of_the_day_34.jpg",
    "http://www.topbestpics.com/wp-content/uploads/2017/11/ugly-people-pics-28.jpg",
    "http://www.nytimes.com/images/blogs/freakonomics/posts/Ugsalesman.jpg",
    "https://www.bestfunnies.com/wp-content/uploads/2015/06/Ugly-People-Pics-4.jpg"
];
var photoArray = [];
var scores = [];

for (let i = 0; i < friends.length; i++) {
    scores = [];
    let obj = {};
    for (let a = 1; a <= 10; a++) {
        let randNum = Math.round(Math.random() * 4) + 1;
        scores.push(randNum);
    }
    obj.name = friends[i];
    obj.photo_url = photo_url[i];
    obj.scores = scores;
    friendsArray.push(obj);
}
console.log(friendsArray);
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
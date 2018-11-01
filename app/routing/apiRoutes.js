var express = require("express");
var friends = require("../data/friend")
var router = express.Router();

router.get("/api/friends", function (request, response) {
    response.json(friends)
})

router.post("/api/friends", function (request, response) {
    var myValues = request.body;
    var bestMatch = {}; // empty object where we will add best match
    var matchedFriend = 0;// matched friend index from array
    var bestMatchedScore = 40; // Max different score would be 40 (50-10)


    // calculate by looping through friends, which one is my best match
        for (let j = 0; j < friends.length; j++) {
            var totalDiff = 0;
            //loop through friends scores
            for (let i = 0; i < friends[j].scores.length; i++) {
                var diff = Math.abs(parseInt(friends[j].scores[i]) - parseInt(myValues.scores[i]));
               totalDiff += diff;                
            }//end inner loop
            console.log(totalDiff, friends[j].name);
            //check to see if above logic works accurately
            if (totalDiff < bestMatchedScore) {
                matchedFriend = j;
                bestMatchedScore = totalDiff;
            }
        }//end outer loop
        //best match found
        bestMatch = friends[matchedFriend];
        //return best match as JSON
        response.json(bestMatch);
        //push myValues to friends array
        friends.push(myValues);
    });

module.exports = router;
var friendData = require('../data/friends');

module.exports = function (app) {
  app.get("api/friends", function (req, res) {
    res.json(friendData)
  })
  app.post("api/friends", function (req, res) {
    var bestMatch={
      name:"",
      photo:"",
      friendDiff: 1000
    };

    var userData= req.body;
    var userScores=userData.scores;
    var totalDiff;

    for (var i = 0; i < friendData.length; i++) {
      var currentFriend = friendData[i];
      totalDiff = 0;
      console.log(currentFriend.name);
      for (var j = 0; j < currentFriend.scores.length; j++) {
        totalDiff += Math.abs(parseInt(userScores[j]) - parseInt(currentFriend.scores[j]));
      }

      if (totalDiff <= bestMatch.friendDifference) {
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDiff;
      }
    }
    friendData.push(userData);
    res.json(bestMatch);
  });
};




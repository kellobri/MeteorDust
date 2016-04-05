import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

});

PlayersList = new Mongo.Collection('players');

//console.log(PlayersList.find().fetch());
Meteor.publish('thePlayers', function(){
  var currentUserId = this.userId;
  return PlayersList.find({createdBy: currentUserId})
});

Meteor.methods({
  'insertPlayerData': function(playerNameVar){
    var currentUserId = Meteor.userId();
    PlayersList.insert({
      name: playerNameVar,
      score: 0,
      createdBy: currentUserId
    });
  },
  'removePlayerData': function(selectedPlayer){
    var currentUserId = Meteor.userId();
    PlayersList.remove({_id: selectedPlayer, createdBy: currentUserId});
  }
});

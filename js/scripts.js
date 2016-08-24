//Business Logic
var userDieResult = 0;
var userTurnResult = 0;
var userTotalScore = 0;

function User(totalScore, turnScore, dieScore, endgame ) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.dieScore = dieScore;
  this.endgame = endgame;
}

function Comp(totalScore, turnScore, dieScore, endgame ) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.dieScore = dieScore;
  this.endgame = endgame;
}
//prototypes - rng, CompLogic, hold, rolled1
User.prototype.dieroll = function(){
  userDieResult = parseInt(Math.floor(Math.random() * 6) + 1);
    if (userDieResult === 1) {
      userDieResult = 1;
      userTurnResult = 0;
    }
  return userDieResult;
}

User.prototype.addRoll = function(){
  if (userDieResult === 1) {
      userDieResult = 0;
    }
  userTurnResult += userDieResult;
  return userTurnResult;
}

User.prototype.total = function(){
  userTotalScore += userTurnResult;
  return userTotalScore;
}
//User Logic
$(document).ready(function() {
  //event.preventDefault();
  var player1 = new User();

    $("#user-roll").click(function() {
      player1.dieScore = player1.dieroll();
      player1.turnScore = player1.addRoll();
      $("#dieScore").text(player1.dieScore);
      $("#turnScore").text(player1.turnScore);
    });
    $("#hold-roll").click(function() {
      player1.totalScore = player1.total();
      $("#totalScore").text(player1.totalScore);
    });

});

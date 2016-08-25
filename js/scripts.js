//Business Logic
var userDieResult = 0;
var userTurnResult = 0;
var userTotalScore = 0;
var compDieResult = 0;
var compTurnResult = 0;
var compTotalScore = 0;
function User(totalScore, turnScore, dieScore, endgame ) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.dieScore = dieScore;
  this.endgame = endgame;
}
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
function Comp(totalScore, turnScore, dieScore, endgame ) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.dieScore = dieScore;
  this.endgame = endgame;
}
Comp.prototype.dieroll = function(){
  compDieResult = parseInt(Math.floor(Math.random() * 6) + 1);
    if (compDieResult === 1) {
      compDieResult = 1;
      compTurnResult = 0;
    }
  return compDieResult;
}
Comp.prototype.addRoll = function(){
  if (compDieResult === 1) {
      compDieResult = 0;
    }
  compTurnResult += compDieResult;
  return compTurnResult;
}
Comp.prototype.total = function(){
  compTotalScore += compTurnResult;
  return compTotalScore;
}
//User Logic
$(document).ready(function() {
  //event.preventDefault();
  var player1 = new User();
  var comp1 = new Comp();

    $("#user-roll").click(function() {
      player1.dieScore = player1.dieroll();
      player1.turnScore = player1.addRoll();
      $("#dieScore").text(player1.dieScore);
      $("#turnScore").text(player1.turnScore);
    });
    $("#hold-roll").click(function() {
      player1.totalScore = player1.total();
      $("#totalScore").text(player1.totalScore);
      //computer's turn
      comp1.dieScore = comp1.dieroll();
      comp1.turnScore = comp1.addRoll();
      $("#compDieScore").text(comp1.dieScore);
      $("#compTurnScore").text(comp1.turnScore);
    });

});

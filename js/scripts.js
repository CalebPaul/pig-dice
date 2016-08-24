//Business Logic
function User(totalScore, turnScore, endgame ) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.endgame = endgame;

}

function Comp(totalScore, turnScore, endgame ) {
  this.totalScore = totalScore;
  this.turnScore = turnScore;
  this.endgame = endgame;

}
//prototypes - rng, CompLogic, hold, rolled1
User.prototype.dieroll = function(){
  var dieResult = Math.floor(Math.random() * 6) + 1;
  return dieResult;
}

var player1 = new User();
player1.turnScore = player1.dieroll();
//alert(player1.turnScore);








// User.prototype.typename = function(){
//
// }
// User.prototype.typename = function(){
//
// }
// User.prototype.typename = function(){
//
// }
//
//
// Comp.prototype.typename = function(){
//
// }
// Comp.prototype.typename = function(){
//
// }
// Comp.prototype.typename = function(){
//
// }
// Comp.prototype.typename = function(){
//
// }

//User Logic
$(document).ready(function() {

    event.preventDefault();

});

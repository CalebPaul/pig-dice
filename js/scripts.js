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
      var compLogic = function(i) {
        console.log("before timeout: " + i);
        setTimeout(function(){
          console.log("timeout: " + i)
         if (i <= 5)
         {
           comp1.dieScore = comp1.dieroll();
           comp1.turnScore = comp1.addRoll();
           $("#compDieScore").text(comp1.dieScore);
           $("#compTurnScore").text(comp1.turnScore);

           if (comp1.dieScore === 1) {
             alert(comp1.dieScore);
             i = 8
             // print comp rolled 1 , user turn
             //comp held, user turn
           }
           return compLogic(i += 1);
         }
          else
          {
            alert("else");
             return i;
         } }, 625);
     };
     compLogic(0);
    });
});
//
// for (var i = 0; i <= 7; i++)(function(i) {
//     setTimeout(function() {
//       alert(valArray[i]);
//     }, i * 500);
//   })(i);
//
//   var compLogic = function(i) {
//  setTimeout(function(){
//      if (i <= 7)
//      {
//        comp1.dieScore = comp1.dieroll();
//        comp1.turnScore = comp1.addRoll();
//        $("#compDieScore").text(comp1.dieScore);
//        $("#compTurnScore").text(comp1.turnScore);
//        alert("if");
//          return compLogic(i++);
//      }
//       else
//       {
//         alert("else");
//          return i;
//      }
//  },i * 200);
//  };
//  compLogic(0);
//
//  var countdown = function(value) {
// setTimeout(function(){
//     if (value > 0) {
//         console.log(value);
//         return countdown(value - 1);
//     } else {
//         return value;
//     }
// },value * 200);
// };
// countdown(10);

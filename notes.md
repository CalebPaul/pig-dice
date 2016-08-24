What will happen when a user clicks "Play"?
  * display brief instructions
  * display 'roll' button
  * display 'hold' button after user has rolled once
  * display user and comp scores continuously
  * display end game message when determined total is reached

What objects will you need? What functions?
  * Objects - User, Comp,
  * Constructors - Score, RNG, Hold, Rolled1, EndGame, CompLogic

How will these be triggered throughout the gameplay?
  * User.Score + CompScore - updates with dice roll value with the exception of '1' rolls
  * RNG - triggered on 'roll' button, rolls dice
  * Hold - triggered on 'hold' button, ends turn
  * Rolled1 - triggered on '1' value on dice
  * EndGame - triggered when determined total is reached


How will information be collected from the user? How will it be displayed?
  * Info collected from form, and displayed in html

Further Exploration

  * Add options to play one of the other variations of Pig Dice using two or more dice

  * Add option to play the computer - easy or hard levels:
    * Easy: Computer always stops after second roll.
    * Hard: Computer uses strategy based on current total and rolled dice.

  * Track User Names for hi score

  * Have user choose target score

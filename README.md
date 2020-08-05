# Ideabox Group Project

## Project Description ##

The Tic-Tac-Toe project is meant to be a display of all of the skills learned so far in mod 1 of Turing. 

What the project itself is, is a task to build a game of Tic-Tac-Toe from the ground up. In this game of Tic-Tac-Toe there will be two players who must alternate turns, have different tokens to represent themselves, and have a win-counter that increments every time they win. There is a header at the top of the page that alternates between the respective players token, with X (in my case picachu) going first, and alternating between the two with every click. There must be under-the-hood logic that can determine whether or not a player has won by connecting 3 of their tokens in a row, column, or diagnolly, and also if the match has reached a draw. When any of these conditions have been met, the header at the top will reflect what condition was met, the correct player win counter will increment, a 3 second delay will occur, and the game will reset, all without refreshing the page. If the page is refreshed however, the win counter should remain consistent for the players. 

## Learning Goals ##

* Write DRY javascript
* Utilize event delegation 
* Weave between the Data Modeland the DOM
* Utilize a Class to instantiate new players to be used within your Data Model
* Have Data persist through Local Storage

## Planning ##

This project did not consist of any strict iterations, however there were recommended iterations for the student to follow, with these iterations I created the below Gist which I followed throughout my development process. I used atom as my text editor, heavily refrenced MDN and W3 schools for some of the more obscure logic, and went through rigorous refactoring to get some of the more tricky logic down. This project was to be completed in 6 days.

https://gist.github.com/BlakeDonn/b7c27d9957e16285c4289dbf735dc1d7


**Challenges**

* Creating logic for the checkWinConditions function led to many edge cases being discovered, as well as many bugs in false flag conditions.
* Determining how to parallel the users visual feedback on the Data Model.
* Having the main.js file not house too much information.


**Wins**

* Getting the product to a complete, functional state.
* Correctly utilizing local storage to persist wins on load, and instantiate new players if wins do not exist.
* Getting the tokens to correctly appear on the DOM, and have transition be seamless between turns.
* Properly implementing event delegation.
* I am proud of the code I wrote, It could be refined to a better state, but I believe it is DRY and seperates the Data Model and the DOM well.


## Functionality ##

![allwinconditions](https://i.imgur.com/Cac3bqy.gif)

**Building Player Class**

* The Player class was being used to instantiate new players on the load of the page, if players allready existed in local storage their wins would be used to display their current wins.

* The player.token held the asset path of the token that player would use for their chip, this player.token would also be what was utilized for reference in the DOM and the Data Model.

* The Player Class also held two static methods which was only used to store and retireve from local storage, these methods were chosen to be static because of the lack of need to call them on individual instantiations of the class itself.

* The player class would be used to create the Game.player1 and Game.player2 properties, and any reference of them would be done through these properties.

**Building Game Class**

* The Game class was what was used for the Data Model of this project, the currentGame global variable housed in main.js was instantiated on page load, and would persist through every reset game. If the page was reset again, it would call on local storage to populate its players, or instantiate new ones.

* The Game class is where most of the logic for this game happens, and is utilized to determine when to adjust the DOM for certain scenarios.

* The Game.boardLayout array is the Data Model representation of the game board, and the logic for win conditions utilizes this to determine an outcome.

* The Game.turn property is used to determine what player is up, and therefore what token should be used,.

* The Game.player1 and Game.player2 are the players of this game, and these properties store the wins, ids, and tokens.

* The checkWinCondition and evaluateResult methods are the logic behind if a game has been won, or has reached a draw, the main.js calls on this to determine so.

* The UpdatePlayerWins and resetBoard methods are called on when a game has ended, to update the player wins in storage, and reset the DataModel board resepectively.

**Buidling Main.js**
 
* Main.js holds all the functions for DOM manipulation 

* Main.js is in charge of the event delegation to ensure the correct pieces are going to the correct square

* Main.js increments the player wins in the respective columns

* Main.js toggles the header between which player token is up, and toggles a win for the respective token or a draw.

* Main.js causes a timeout after a game has finished, disables click-events, resets the game and re-enables click-events

* Main.js is in charge of making sure the user sees a direct representation of our Data Model

**The Seperation of Roles**

The Game Class being utilized to determine many aspects of this project meant that it had to be refined to only provide neccessary information, to to accurately access conditions. 

The Global variable of `currentGame` is what was used by Main.js to aquire the relevant information for functions to work. Through the use of arguments and parameters such as `result`,`conditions`, `boardLocation`, and `currentPlayer` the Data Model did not have to be referenced in every funciton. This passing of data between relevant SRP functions was key to slimming down and refining the JavaScript in this project. This passing of information back and forth led to a firm understanding of the seperation between these three JavaScript files, while the logic could be more refined, I feel this does portray a strong seperation of roles.

### Programming Languages Used ###

* JavaScript
* HTML
* CSS


### Comp Given ###

https://frontend.turing.io/projects/module-1/tic-tac-toe-solo.html

### Contributor ###

* [Brigette Doelp](https://github.com/BrigetteDoelp)



var gameBoard = document.querySelector(".board");
var turnToken = document.querySelector(".turn-token")
var turnToken2 = document.querySelector(".turn-token2")
var player1Wins = document.querySelector(".wins1")
var player2Wins = document.querySelector(".wins2")
var normalHeader = document.querySelector(".normal-header")
var winHeader = document.querySelector(".win-header")
var drawHeader = document.querySelector(".draw-header")

// Data Model
var currentGame = '';

//Event listeners
window.addEventListener("load", createGame);
gameBoard.addEventListener("click", playerMove);

//Event Handler
function createGame() {
  var players = Player.retrieveWinsFromStorage('savedPlayers');
  currentGame = new Game(players[0], players[1]);
  displayPlayerData(currentGame.player1, currentGame.player2)
};

function playerMove(){
  if(event.target.hasChildNodes()){
    var boardLocation = event.target.id;
    var currentPlayer = currentGame.placeToken();
    var boardLocationToChange = currentGame.updatePlacedIconLocation(boardLocation, currentPlayer);
    currentGame.changeTurn();
    updateBoard(boardLocationToChange, currentPlayer);
  }
};

function updateBoard(asset, currentPlayer){
  var insertedHTML = `<img class = "board-token" src = ${asset}>`
  event.target.closest(".icon").insertAdjacentHTML("afterbegin", insertedHTML)
  var result = currentGame.checkWinCondition(currentPlayer);
  checkForWin(result);
  updatePlayerData(turnToken, turnToken2);
}

function displayPlayerData(player1, player2){
  player1Wins.innerText = `${player1.wins} wins`;
  player2Wins.innerText = `${player2.wins} wins`;
}

function displayWinningPlayer(result){
  updatePlayerData(normalHeader, winHeader)
  winningIMG = document.getElementById("33");
  winningIMG.src = result.includes(1) ? "assets/X.svg" : "assets/0.png";
}

function updatePlayerData(element1, element2){
  element1.classList.toggle("hidden");
  element2.classList.toggle("hidden");
}

function checkForWin(result){
  if (currentGame.turn === 10 && result === undefined) {
    displayDraw();
  }
  if (result === '1 wins!' || result === '2 wins!'){
    displayWinningPlayer(result)
    setTimeout(clearBoard, 3000);
    currentGame.resetBoard();
    currentGame.updatePlayerWins(result);
  }
}

function displayDraw(){
  updatePlayerData(normalHeader, drawHeader)
}

function clearBoard(){
  var resetTokens = gameBoard.querySelectorAll(".board-token");
  for (var i = 0 ; i < resetTokens.length; i++){
    resetTokens[i].remove();
  }
  updatePlayerData(normalHeader, winHeader)
  resetTurnToken();
}

function resetTurnToken(){
  if (turnToken.classList.contains("hidden")){
    updatePlayerData(turnToken, turnToken2)
  }
}

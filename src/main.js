var gameBoard = document.querySelector(".board");
var player1DOM = document.querySelector(".player1")
var player2DOM = document.querySelector(".player2")
var turnToken = document.querySelector(".turn-token")
var turnToken2 = document.querySelector(".turn-token2")
var player1Wins = document.querySelector(".wins1")
var player2Wins = document.querySelector(".wins2")

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
    updateBoard(boardLocationToChange, currentPlayer);
    currentGame.changeTurn();
    updatePlayerData();
  }
};

function updateBoard(asset, currentPlayer){
  var insertedHTML = `<img class = "board-token" src = ${asset}>`
  event.target.closest(".icon").insertAdjacentHTML("afterbegin", insertedHTML)
  var result = currentGame.checkWinCondition(currentPlayer);
  checkForWin(result)
}

function displayPlayerData(player1, player2){
  var p1Token = `<img class = "token1" src = "${player1.token}">`
  player1DOM.insertAdjacentHTML("afterbegin", p1Token);
  var p2Token = `<img class = "token2" src = "${player2.token}">`
  player2DOM.insertAdjacentHTML("afterbegin", p2Token);
  player1Wins.innerText = `${player1.wins} wins`;
  player2Wins.innerText = `${player2.wins} wins`;
}

function updatePlayerData(player1, player2){
  turnToken.classList.toggle("hidden");
  turnToken2.classList.toggle("hidden");
}

function checkForWin(result){
  if (result === '1 wins!' || result === '2 wins!'){
    setTimeout(clearBoard, 3000);
  }
}

function clearBoard(){
  var resetTokens = gameBoard.querySelectorAll(".board-token");
  for (var i = 0 ; i < resetTokens.length; i++){
    resetTokens[i].remove();
  }
}

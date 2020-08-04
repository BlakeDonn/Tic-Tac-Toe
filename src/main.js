var gameBoard = document.querySelector(".board");
var turnToken = document.querySelector(".turn-token");
var turnToken2 = document.querySelector(".turn-token2");
var player1Wins = document.querySelector(".wins1");
var player2Wins = document.querySelector(".wins2");
var normalHeader = document.querySelector(".normal-header");
var winHeader = document.querySelector(".win-header");
var drawHeader = document.querySelector(".draw-header");

var currentGame = '';

window.addEventListener("load", createGame);
gameBoard.addEventListener("click", playerMove);

function createGame() {
  var players = Player.retrieveWinsFromStorage('savedPlayers');
  currentGame = new Game(players[0], players[1]);
  displayPlayerData(currentGame.player1, currentGame.player2);
};

function playerMove() {
  if (event.target.hasChildNodes()) {
    var boardLocation = event.target.id;
    var currentPlayer = currentGame.changeTurn();
    currentGame.updateBoardLayout(boardLocation, currentPlayer);
    updateBoard(currentPlayer);
    afterTurnEval(currentPlayer);
  }
};

function updateBoard(currentPlayer) {
  var insertedHTML = `<img class = "board-token" src = ${currentPlayer}>`;
  event.target.closest(".icon").insertAdjacentHTML("afterbegin", insertedHTML);
};

function afterTurnEval(currentPlayer) {
  var result = currentGame.checkWinCondition(currentPlayer);
  var conditions = currentGame.evaluateResult(result);
  updatePlayerData(turnToken, turnToken2);
  determineWinState(conditions, result);
};

function determineWinState (conditions, result) {
  if (conditions === false) {
    updatePlayerData(normalHeader, drawHeader);
    endGame();
  }
  if (conditions === true) {
    displayWinningPlayer(result);
    endGame();
    currentGame.updatePlayerWins(result);
  }
};

function updatePlayerData(element1, element2) {
  if (element1.classList.contains("hidden") && element2.classList.contains("hidden")) {
    element1.classList.toggle("hidden");
    drawHeader.classList.toggle("hidden");
  } else {
    element1.classList.toggle("hidden");
    element2.classList.toggle("hidden");
  }
};

function displayWinningPlayer(result) {
  updatePlayerData(normalHeader, winHeader);
  winningIMG = document.getElementById("33");
  winningIMG.src = result;
};

function displayPlayerData(player1, player2) {
  player1Wins.innerText = `${player1.wins} wins`;
  player2Wins.innerText = `${player2.wins} wins`;
};

function endGame(result) {
  setTimeout(clearBoard, 3000);
  currentGame.resetBoard();
};

function clearBoard() {
  var resetTokens = gameBoard.querySelectorAll(".board-token");
  for (var i = 0 ; i < resetTokens.length; i++) {
    resetTokens[i].remove();
  }
  updatePlayerData(normalHeader, winHeader);
  resetTurnToken();
};

function resetTurnToken() {
  if (turnToken.classList.contains("hidden")) {
    updatePlayerData(turnToken, turnToken2);
  }
};

var gameBoard = document.querySelector(".board");

// Data Model
var currentGame = '';

//Event listeners
window.addEventListener("load", createGame);
gameBoard.addEventListener("mousedown", playerMove);

//Event Handler
function createGame() {
  var players = Player.retrieveWinsFromStorage('savedPlayers');
  currentGame = new Game(players[0], players[1]);
};

function playerMove(){
  var boardLocation = event.target.id;
  var currentPlayer = currentGame.placeToken();
  var boardLocationToChange = currentGame.updatePlacedIconLocation(boardLocation, currentPlayer);
  updateBoard(boardLocationToChange);
  currentGame.changeTurn();
};

function updateBoard(asset){
  var insertedHTML = `<img class = "board-token" src = ${asset}>`
  event.target.closest(".icon").insertAdjacentHTML("afterbegin", insertedHTML)
  currentGame.checkWinCondition();
}

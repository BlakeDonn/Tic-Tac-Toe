
//Event listeners
window.addEventListener("click", createGame);


//Event Handler
function createGame() {
  var players = Player.retrieveWinsFromStorage('savedPlayers');
  var currentGame = new Game(players[0], players[1]);
};

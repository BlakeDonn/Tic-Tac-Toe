
//Event listeners
window.addEventListener("load", createGame);


//Event Handler
createGame() {
  var player1 = new Player(Player.retrieveWinsFromStorage('player1'));
  var player2 = new Player(Player.retrieveWinsFromStorage('player2'));
  var currentGame = new Game(player1, player2);
};

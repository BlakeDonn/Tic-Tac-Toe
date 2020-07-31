
//Event listeners
window.addEventListener("load", createGame);

//Event Handlesr
createGame(){
  var currentWins = Player.retrieveWinsFromStorage();
  var currentGame = new Game(currentWins[0],currentWins[1])
  var currentPlayers = new Player // not sure here
}

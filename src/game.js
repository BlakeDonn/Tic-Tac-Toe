class Game {
  constructor(player1, player2) {
    this.player1 = new Player(player1);
    this.player2 = new Player(player2);
    this.turn = 1;
    this.placedIconLocation = ['', '', '', '', '', '', '', '', ''];
  }
  placeToken() {
    return this.turn % 2 == 0 ? 2 : 1;
  }

  updatePlacedIconLocation(index, player) {
    this.placedIconLocation[index] = player;
    return player === 1 ? this.player1.token : this.player2.token;
  }

  changeTurn() {
    if (this.turn > 8) {
      return
    }
    else this.turn++
  }
  checkWinCondition(player) {
    for (var i = 0; i < 9; i ++) {
      if (i == 0 || i == 3 || i == 6){
      var one = this.placedIconLocation[i] == player && this.placedIconLocation[i + 1] == player && this.placedIconLocation[i + 2] == player ? `${player} wins!`: null;
      }
      if (i == 0 || i == 1 || i == 2){
      var two =  this.placedIconLocation[i] == player && this.placedIconLocation[i + 3] == player && this.placedIconLocation[i + 6] == player ? `${player} wins!`: null;
      }
      if (i == 6 ){
      var three =  this.placedIconLocation[i] == player && this.placedIconLocation[i - 2] == player && this.placedIconLocation[i - 4] == player ? `${player} wins!`: null;
      }
      if (i == 8){
      var four =  this.placedIconLocation[i] == player && this.placedIconLocation[i - 4] == player && this.placedIconLocation[i - 8] == player ? `${player} wins!`: null;
      }
      if (one != null){
        return one;
      }
      if (two != null){
        return two;
      }
      if (three != null){
        return three;
      }
      if (four != null){
        return four;
      }
    }
  }


  resetBoard(){
    this.placedIconLocation = ['', '', '', '', '', '', '', '', '']
    this.turn = 1;
  }

  updatePlayerWins(result){
    result.includes(1) ? this.player1.wins++ : this.player2.wins++;
    console.log(this.player1);
    console.log(this.player2);
  }
};

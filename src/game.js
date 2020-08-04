class Game {
  constructor(player1, player2) {
    this.player1 = new Player(player1);
    this.player2 = new Player(player2);
    this.p1Turn = this.player1.wins >= this.player2.wins ? 1 : 2;
    this.p2Turn = this.player2.wins > this.player1.wins ? 1 : 2;
    this.turn = 1;
    this.placedIconLocation = [
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      ''
    ];
  }
  placeToken() {
    if (this.turn === 1) {
      var firstMovePlace = this.p1Turn === 1 ? this.p1Turn : this.p2Turn;
      return firstMovePlace;
    }
    if (this.turn > 1) {
      var restOfGamePlace = this.turn % 2 === 0 && this.p1Turn === 1 ? this.p2Turn :  this.p1Turn;
      return restOfGamePlace;
    }
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
      this.placedIconLocation[i] == player && this.placedIconLocation[i + 1] == player && this.placedIconLocation[i + 2] == player ? console.log(`${player} wins!`): null;
      }
      if (i == 0 || i == 1 || i == 2){
      this.placedIconLocation[i] == player && this.placedIconLocation[i + 3] == player && this.placedIconLocation[i + 6] == player ? console.log(`${player} wins!`): null;
      }
      if (i == 6 || i == 8 ){
      this.placedIconLocation[i] == player && this.placedIconLocation[i - 4] == player && this.placedIconLocation[i - 8] == player ? console.log(`${player} wins!`): null;
      this.placedIconLocation[i] == player && this.placedIconLocation[i - 2] == player && this.placedIconLocation[i - 4] == player ? console.log(`${player} wins!`): null;
    }
  }
}
};

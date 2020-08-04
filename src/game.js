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
  checkWinCondition() {
    for (var i = 0; i < 9; i ++) {
      if (i == 0 || i == 3 || i == 6){
      this.placedIconLocation[i] == 1 && this.placedIconLocation[i + 1] == 1 && this.placedIconLocation[i + 2] == 1 ? console.log('x wins!'): null;
      this.placedIconLocation[i] == 2 && this.placedIconLocation[i + 1] == 2 && this.placedIconLocation[i + 2] == 2 ? console.log('0 wins!'): null;
      }
      if (i == 0 || i == 1 || i == 2){
      this.placedIconLocation[i] == 1 && this.placedIconLocation[i + 3] == 1 && this.placedIconLocation[i + 6] == 1 ? console.log('x wins!'): null;
      this.placedIconLocation[i] == 2 && this.placedIconLocation[i + 3] == 2 && this.placedIconLocation[i + 6] == 2 ? console.log('0 wins!'): null;
      }
      if (i == 0 || i == 2){
      this.placedIconLocation[i] == 1 && this.placedIconLocation[i + 4] == 1 && this.placedIconLocation[i + 8] == 1 ? console.log('x wins!'): null;
      this.placedIconLocation[i] == 2 && this.placedIconLocation[i + 4] == 2 && this.placedIconLocation[i + 8] == 2 ? console.log('0 wins!'): null;
      this.placedIconLocation[i] == 1 && this.placedIconLocation[i + 4] == 1 && this.placedIconLocation[i + 6] == 1 ? console.log('x wins!'): null;
      this.placedIconLocation[i] == 2 && this.placedIconLocation[i + 4] == 2 && this.placedIconLocation[i + 6] == 2 ? console.log('0 wins!'): null;
    }
  }
}
};

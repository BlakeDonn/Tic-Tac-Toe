class Game {
  constructor(player1, player2) {
    this.p1Turn = player1.wins > player2.wins ? 1 : 2;
    this.p2Turn = player2.wins > player1.wins ? 1 : 2;
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
  placeToken(player1, player2) {
    if (this.turn === 1) {
      return this.p1Turn === 1 ? player1.token : player2.token;
    }
    if (this.turn > 1) {
      return this.turn % 2 === 0 && this.p1Turn === 1 ? player2.token : player1.token;
    }
  }
  changeTurn() {
    if (this.turn > 8) {
      return
    }
    this.turn++
  }
  checkWinCondition() {
    for (var i = 0; i < 9; i ++) {
      this.placedIconLocation[i] && this.placedIconLocation[i + 1] && this.placedIconLocation[i + 2] ? console.log('yes!'): null;
      this.placedIconLocation[i] && this.placedIconLocation[i + 3] && this.placedIconLocation[i + 6] ? console.log('no!'): null;
      this.placedIconLocation[i] && this.placedIconLocation[i + 4] && this.placedIconLocation[i + 8] || this.placedIconLocation[i + 6]  ? console.log('maybe!'): null;
    }
  }
};
// module.exports = Game;

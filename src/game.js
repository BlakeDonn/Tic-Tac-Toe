class Game {
  constructor(player1, player2) {
    // this.p1Wins = player1.wins
    // this.p2Wins = player2.wins
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

  changeTurn() {
    if (this.turn > 8) {
      return
    }
    this.turn++
    var whichPlayer = this.turn % 2 === 0 ? 1 : 2;
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

class Game {
  constructor(player1, player2) {
    this.p1Wins = player1.wins
    this.p2Wins = player2.wins
    this.turn = 1;
    this.placedIconLocation = [
      'true',
      'true',
      'true',
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
      placedIconLocation[i] ? placedIconLocation[i + 1] ? placedIconLocation[i + 2] : 'You win!': null;
      placedIconLocation[i] ? placedIconLocation[i + 3] ? placedIconLocation[i + 6] : 'You win!': null;
      placedIconLocation[i] ? placedIconLocation[i + 4] ? placedIconLocation[i + 8] : 'You win!': null;
    }
  }
};
module.exports = Game;

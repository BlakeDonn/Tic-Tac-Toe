class Game {
  constructor(player1, player2) {
    this.player1 = new Player(player1);
    this.player2 = new Player(player2);
    this.turn = 1;
    this.boardLayout = ['', '', '', '', '', '', '', '', ''];
  }

  changeTurn() {
    return this.turn % 2 == 0 ? (this.turn++, this.player2.token) : (this.turn++, this.player1.token);
  }

  updateBoardLayout(index, player) {
    this.boardLayout[index] = player;
  }

  checkWinCondition(player) {
    for (var i = 0; i < 9; i ++) {
      if (i == 0 || i == 3 || i == 6) {
        var one = this.boardLayout[i] == player && this.boardLayout[i + 1] == player && this.boardLayout[i + 2] == player ? player : null;
      }
      if (i == 0 || i == 1 || i == 2) {
        var two =  this.boardLayout[i] == player && this.boardLayout[i + 3] == player && this.boardLayout[i + 6] == player ? player: null;
      }
      if (i == 6 ) {
        var three =  this.boardLayout[i] == player && this.boardLayout[i - 2] == player && this.boardLayout[i - 4] == player ? player: null;
      }
      if (i == 8) {
        var four =  this.boardLayout[i] == player && this.boardLayout[i - 4] == player && this.boardLayout[i - 8] == player ? player: null;
      }
      if (one != null) {
        return one;
      }
      if (two != null) {
        return two;
      }
      if (three != null) {
        return three;
      }
      if (four != null) {
        return four;
      }
    }
  }

  evaluateResult(result) {
    if (this.turn === 10 && result === undefined) {
      return false;
    }
    if (result === this.player1.token || result === this.player2.token) {
      this.updatePlayerWins(result);
      return true;
    }
  }

  updatePlayerWins(result) {
    result.includes(this.player1.token) ? this.player1.wins++ : this.player2.wins++;
    Player.saveWinsToStorage('savedPlayers', [this.player1, this.player2]);
    displayPlayerData(this.player1, this.player2);
  }

  resetBoard() {
    this.boardLayout = ['', '', '', '', '', '', '', '', ''];
    this.turn = 1;
  }

};

class Game {
  constructor(player1, player2) {
    this.p1Wins = player1.wins
    this.p2Wins = player2.wins
    this.turn = 0;                    /// increment, every % 2 === 0 is second players turn
    this.placedIconLocation = [       //an array containing 9 elements, manipulate these elements to show right icon, by default hidden
      one,                            // may have to be objects
      two,
      three,
      four,
      five,
      six,
      seven,
      eight,
      nine
    ];
  }

  placeIcon() {
            // adjust element in array at resepective location to respective icon
                // if player 1 placedIconLocation[i].whodunnit = p1 if play 2 opposite
                    // check if 1,5,9 = p1, win
                        // if turn = 8 // draw
                            // if win, p1/2.saveWinsToStorage
  }
};

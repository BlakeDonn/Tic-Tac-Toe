class Game {
  constructor(personObj1, playerObj2) {      //possibly just pass through person obj
    this.p1Wins = personObj1.wins       // also just p1 token and p2 just like this
    this.p2Wins = personObj2.wins
    this.turn = turn; //this is counter could be boolean value, could be number
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

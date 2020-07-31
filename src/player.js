class Player {
  constructor(id, token, wins) {
    this.id = id;
    this.token = token;
    this.wins = wins || 0;
  }
  saveWinsToStorage() {
    // On every game end, add new wincount to local storage
  }
  retrieveWinsFromStorage() {
    // on load, pull from local storage and instantiate the two playesr with the relevant information
    // Player.retrieve to access this
  }
};

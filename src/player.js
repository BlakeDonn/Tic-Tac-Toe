class Player {
  constructor(id, token, wins) {
    this.id = id;
    this.token = token;
    this. wins = wins;
  }
  saveWinsToStorage() {
    // On every game end, add new wincount to local storage
  }
  retrieveWinsToStorage() {
    // on load, pull from local storage and instantiate the two playesr with the relevant information
  }
};

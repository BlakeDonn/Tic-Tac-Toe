class Player {
  constructor(obj) {
    this.id = obj.id;
    this.token = obj.token;
    this.wins = obj.wins || 0;
  }
  static saveWinsToStorage(key, playerStats) {
    var stringifiedPlayers = JSON.stringify(playerStats);
    localStorage.setItem(key, stringifiedPlayers);
  }
  static retrieveWinsFromStorage(key) {
    var retrievePlayer = localStorage.getItem(key);
    return retrievePlayer != null ? JSON.parse(retrievePlayer) : [{id: 1, token: "assets/X.svg"}, {id: 2, token: "assets/0.png"}];
  }
};

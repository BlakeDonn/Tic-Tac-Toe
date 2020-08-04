class Player {
  constructor(obj) {
    this.id = obj.id;
    this.token = obj.token;
    this.wins = obj.wins || 0;
  }
  saveWinsToStorage(key) {
    var stringifiedPlayer = JSON.stringify(winningConditions);
    localStorage.setItem(key, stringifiedPlayer);
  }
  static retrieveWinsFromStorage(key) {
    var retrievePlayer = localStorage.getItem(key);
    return retrievePlayer != null ? JSON.parse(retrievePlayer) : [{id: 1, token: "assets/X.svg"}, {id: 2, token: "assets/0.png"}];
  }
};

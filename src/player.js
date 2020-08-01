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
  retrieveWinsFromStorage(key) {
    var retrievePlayer = localStorage.getItem(key);
    return JSON.parse(retrievePlayer);
  }
};

module.exports = Player;

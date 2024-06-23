const Player = require('./player');

class Arena {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.attackingPlayer = player1.health < player2.health ? player1 : player2;
    this.defendingPlayer = this.attackingPlayer === player1 ? player2 : player1;
  }

  rollDice() {
    return Math.floor(Math.random() * 6) + 1;
  }

  fight() {
    while (this.player1.isAlive() && this.player2.isAlive()) {
      this.takeTurn();
      this.switchPlayers();
    }
    return this.player1.isAlive() ? this.player1 : this.player2;
  }

  takeTurn() {
    const attackRoll = this.rollDice();
    const defendRoll = this.rollDice();

    const attackDamage = this.attackingPlayer.attack * attackRoll;
    const defendDamage = this.defendingPlayer.strength * defendRoll;

    const damage = attackDamage - defendDamage;

    if (damage > 0) {
      this.defendingPlayer.health -= damage;
    }

    console.log(`${this.attackingPlayer.name} attacks ${this.defendingPlayer.name} for ${damage} damage.`);
    console.log(`${this.defendingPlayer.name} health: ${this.defendingPlayer.health}`);
  }

  switchPlayers() {
    [this.attackingPlayer, this.defendingPlayer] = [this.defendingPlayer, this.attackingPlayer];
  }
}

module.exports = Arena;

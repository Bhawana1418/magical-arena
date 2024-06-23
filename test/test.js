const assert = require('assert');
const Player = require('../src/player');
const Arena = require('../src/arena');

describe('Player', function () {
  it('should initialize with correct attributes', function () {
    const player = new Player('Test', 50, 5, 10);
    assert.strictEqual(player.name, 'Test');
    assert.strictEqual(player.health, 50);
    assert.strictEqual(player.strength, 5);
    assert.strictEqual(player.attack, 10);
  });

  it('should return true if player is alive', function () {
    const player = new Player('Test', 50, 5, 10);
    assert.strictEqual(player.isAlive(), true);
  });

  it('should return false if player is dead', function () {
    const player = new Player('Test', 0, 5, 10);
    assert.strictEqual(player.isAlive(), false);
  });
});

describe('Arena', function () {
  it('should determine the correct initial attacking player', function () {
    const playerA = new Player('Player A', 50, 5, 10);
    const playerB = new Player('Player B', 100, 10, 5);
    const arena = new Arena(playerA, playerB);
    assert.strictEqual(arena.attackingPlayer, playerA);
  });

  it('should switch players correctly', function () {
    const playerA = new Player('Player A', 50, 5, 10);
    const playerB = new Player('Player B', 100, 10, 5);
    const arena = new Arena(playerA, playerB);
    arena.switchPlayers();
    assert.strictEqual(arena.attackingPlayer, playerB);
    assert.strictEqual(arena.defendingPlayer, playerA);
  });
});

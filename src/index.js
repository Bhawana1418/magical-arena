const Player = require('./player');
const Arena = require('./arena');

const playerA = new Player('Player A', 50, 5, 10);
const playerB = new Player('Player B', 100, 10, 5);

const arena = new Arena(playerA, playerB);
const winner = arena.fight();

console.log(`The winner is ${winner.name}`);

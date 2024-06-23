const assert = require('assert');
const Player = require('../src/player');
const Arena = require('../src/arena');

describe('Player', function() {
    describe('#takeDamage()', function() {
        it('should reduce player health correctly', function() {
            const player = new Player('Test Player', 100, 10, 5);
            player.takeDamage(20);
            assert.strictEqual(player.health, 80);
        });

        it('should not allow negative damage amount', function() {
            const player = new Player('Test Player', 100, 10, 5);
            assert.throws(() => {
                player.takeDamage(-10);
            }, Error);
        });
    });

    describe('#isAlive()', function() {
        it('should return true when health is positive', function() {
            const player = new Player('Test Player', 50, 10, 5);
            assert.strictEqual(player.isAlive(), true);
        });

        it('should return false when health is zero', function() {
            const player = new Player('Test Player', 0, 10, 5);
            assert.strictEqual(player.isAlive(), false);
        });
    });
});

describe('Arena', function() {
    describe('#fight()', function() {
        it('should correctly simulate battle between two players', function() {
            const player1 = new Player('Player A', 50, 5, 10);
            const player2 = new Player('Player B', 100, 10, 5);
            const arena = new Arena(player1, player2);

            arena.fight();

            assert.strictEqual(player1.isAlive(), false);
            assert.strictEqual(player2.isAlive(), true);
        });
    });

    // Add more tests to cover edge cases, invalid inputs, etc.
});

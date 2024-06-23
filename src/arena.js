const Player = require('./player');

class Arena {
    constructor(player1, player2) {
        this.validatePlayer(player1);
        this.validatePlayer(player2);
        
        this.player1 = player1;
        this.player2 = player2;
    }

    validatePlayer(player) {
        if (!(player instanceof Player)) {
            throw new Error('Invalid player object.');
        }
        if (player.health <= 0 || player.strength <= 0 || player.attack <= 0) {
            throw new Error('Player attributes must be positive.');
        }
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    fight() {
        while (this.player1.isAlive() && this.player2.isAlive()) {
            this.battleRound(this.player1, this.player2);
            if (this.player2.isAlive()) {
                this.battleRound(this.player2, this.player1);
            }
        }

        this.printWinner();
    }

    battleRound(attacker, defender) {
        const attackRoll = this.rollDice();
        const defenseRoll = this.rollDice();

        const attackDamage = this.calculateAttackDamage(attacker, attackRoll);
        const defenseValue = this.calculateDefenseValue(defender, defenseRoll);

        const damageDealt = this.calculateDamageDealt(attackDamage, defenseValue);
        this.applyDamage(defender, damageDealt, attacker);

        this.printRoundResult(attacker, defender, damageDealt);
    }

    calculateAttackDamage(player, attackRoll) {
        return player.attack * attackRoll;
    }

    calculateDefenseValue(player, defenseRoll) {
        return player.strength * defenseRoll;
    }

    calculateDamageDealt(attackDamage, defenseValue) {
        return Math.max(0, attackDamage - defenseValue);
    }

    applyDamage(defender, damageDealt, attacker) {
        defender.takeDamage(damageDealt);
    }

    printRoundResult(attacker, defender, damageDealt) {
        if (damageDealt > 0) {
            console.log(`${attacker.name} attacks ${defender.name} for ${damageDealt} damage! ${defender.name}'s health is now ${defender.health}`);
        } else {
            console.log(`${defender.name} defends successfully! No damage taken.`);
        }
    }

    printWinner() {
        if (this.player1.isAlive()) {
            console.log(`${this.player1.name} wins!`);
        } else {
            console.log(`${this.player2.name} wins!`);
        }
    }
}

module.exports = Arena;

const Player = require('./player');

/**
 * Represents the Magical Arena where players battle each other.
 */
class Arena {
    /**
     * Creates an Arena instance with two players.
     * @param {Player} player1 - The first player.
     * @param {Player} player2 - The second player.
     */
    constructor(player1, player2) {
        this.validatePlayer(player1);
        this.validatePlayer(player2);
        
        this.player1 = player1;
        this.player2 = player2;
    }

    /**
     * Validates that a player is a valid instance of Player and has positive attributes.
     * @param {Player} player - The player to validate.
     * @throws {Error} If player is not a valid Player instance or attributes are not positive.
     */
    validatePlayer(player) {
        if (!(player instanceof Player)) {
            throw new Error('Invalid player object.');
        }
        if (player.health <= 0 || player.strength <= 0 || player.attack <= 0) {
            throw new Error('Player attributes must be positive.');
        }
    }


    /**
     * Rolls a 6-sided dice and returns the result.
     * @returns {number} The result of the dice roll (1-6).
     */
    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    /**
     * Initiates the fight between two players, alternating turns until one is defeated.
     */
    fight() {
        while (this.player1.isAlive() && this.player2.isAlive()) {
            this.battleRound(this.player1, this.player2);
            if (this.player2.isAlive()) {
                this.battleRound(this.player2, this.player1);
            }
        }

        this.printWinner();
    }


    /**
     * Conducts a single round of battle between an attacker and a defender.
     * @param {Player} attacker - The player attacking.
     * @param {Player} defender - The player defending.
     */
    battleRound(attacker, defender) {
        const attackRoll = this.rollDice();
        const defenseRoll = this.rollDice();

        const attackDamage = this.calculateAttackDamage(attacker, attackRoll);
        const defenseValue = this.calculateDefenseValue(defender, defenseRoll);

        const damageDealt = this.calculateDamageDealt(attackDamage, defenseValue);
        this.applyDamage(defender, damageDealt, attacker);

        this.printRoundResult(attacker, defender, damageDealt);
    }

    /**
     * Calculates the damage dealt by an attacker based on attack roll.
     * @param {Player} player - The attacking player.
     * @param {number} attackRoll - The roll of the attack dice.
     * @returns {number} The calculated damage.
     */
    calculateAttackDamage(player, attackRoll) {
        return player.attack * attackRoll;
    }

    /**
     * Calculates the defense value of a defender based on defense roll.
     * @param {Player} player - The defending player.
     * @param {number} defenseRoll - The roll of the defense dice.
     * @returns {number} The calculated defense value.
     */
    calculateDefenseValue(player, defenseRoll) {
        return player.strength * defenseRoll;
    }

    /**
     * Calculates the damage dealt after considering defense value.
     * @param {number} attackDamage - The damage dealt by the attacker.
     * @param {number} defenseValue - The defense value of the defender.
     * @returns {number} The damage dealt after defense.
     */
    calculateDamageDealt(attackDamage, defenseValue) {
        return Math.max(0, attackDamage - defenseValue);
    }

    /**
     * Applies damage to the defender.
     * @param {Player} defender - The player receiving the damage.
     * @param {number} damageDealt - The amount of damage to apply.
     * @param {Player} attacker - The player causing the damage.
     */
    applyDamage(defender, damageDealt, attacker) {
        defender.takeDamage(damageDealt);
    }

    /**
     * Prints the result of a battle round.
     * @param {Player} attacker - The attacking player.
     * @param {Player} defender - The defending player.
     * @param {number} damageDealt - The damage dealt in the round.
     */
    printRoundResult(attacker, defender, damageDealt) {
        if (damageDealt > 0) {
            console.log(`${attacker.name} attacks ${defender.name} for ${damageDealt} damage! ${defender.name}'s health is now ${defender.health}`);
        } else {
            console.log(`${defender.name} defends successfully! No damage taken.`);
        }
    }

    /**
     * Prints the winner of the battle.
     */
    printWinner() {
        if (this.player1.isAlive()) {
            console.log(`${this.player1.name} wins!`);
        } else {
            console.log(`${this.player2.name} wins!`);
        }
    }
}

module.exports = Arena;

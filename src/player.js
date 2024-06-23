/**
 * Represents a player in the Magical Arena.
 */

class Player {
    /**
     * Creates a Player instance.
     * @param {string} name - The name of the player.
     * @param {number} health - The health attribute of the player (positive integer).
     * @param {number} strength - The strength attribute of the player (positive integer).
     * @param {number} attack - The attack attribute of the player (positive integer).
     */
    constructor(name, health, strength, attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    /**
     * Checks if the player is alive based on current health.
     * @returns {boolean} True if health is greater than 0, otherwise false.
     */

    isAlive() {
        return this.health > 0;
    }

    /**
     * Reduces the player's health by the specified amount.
     * @param {number} damageAmount - The amount of damage to inflict on the player.
     * @throws {Error} If damageAmount is negative.
     */
    takeDamage(damageAmount) {
        if (damageAmount < 0) {
            throw new Error('Damage amount cannot be negative.');
        }
        this.health -= damageAmount;
        if (this.health < 0) {
            this.health = 0;
        }
    }
}

module.exports = Player;

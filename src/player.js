class Player {
    constructor(name, health, strength, attack) {
        this.name = name;
        this.health = health;
        this.strength = strength;
        this.attack = attack;
    }

    isAlive() {
        return this.health > 0;
    }

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

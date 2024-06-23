const Player = require('./player');

class SpecialPlayer extends Player {
    constructor(name, health, strength, attack, specialAbility) {
        super(name, health, strength, attack);
        this.specialAbility = specialAbility;
    }

    useSpecialAbility() {
        // Implement special ability logic
        console.log(`${this.name} uses ${this.specialAbility}!`);
    }
}

module.exports = SpecialPlayer;

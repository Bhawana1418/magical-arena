# Magical Arena Simulation

This project simulates a Magical Arena where players engage in combat based on specified rules.

## How to Run

To run the simulation, follow these steps:

1. Ensure you have Node.js installed on your machine.
2. Clone or download this repository.
3. Navigate to the project directory in your terminal.
4. Install dependencies (if any): `npm install`
5. Run the simulation: `node src/index.js`

## Rules

- Each player has attributes: health, strength, and attack.
- Players take turns attacking, rolling a 6-sided die for damage.
- The defender rolls a 6-sided die for defense.
- Damage dealt is calculated based on attack and defense rolls.
- The game ends when one player's health drops to 0 or below.

## Structure

- `src/`: Contains source code files.
- `test/`: Contains unit tests.

## Technologies Used

- Node.js
- JavaScript


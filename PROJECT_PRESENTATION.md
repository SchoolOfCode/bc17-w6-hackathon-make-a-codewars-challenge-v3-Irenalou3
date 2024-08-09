# Treasure Finder

## Overview 🏴‍☠️🦜🏴‍☠️🦜🏴‍☠️🦜🏴‍☠️💀🪙🐟🪙🐟💛
Ahoy, brave Pirate! Welcome to the Treasure Finder, a thrilling quest where you must uncover hidden treasures buried within a string. This project involves writing a function that sifts through the input string to find hidden numbers (treasures) and returns a summary of your findings.

Your mission is to develop a function that will:
- Determine whether any treasures (numbers) are present in the string.
- Calculate the total value (sum) of these treasures.


## Key Features
- **Treasure Detection**: The function scans the input string to identify any numbers (treasures) hidden within.
- **Sum Calculation**: It calculates the sum of all found numbers, representing the total value of the treasures.
.

## Technical Details
- **Language**: JavaScript (ES6+)
- **Function Name**: `treasureFinder`
- **Input**: A string containing potential hidden clues (numbers).
- **Output**: An object with three properties:
  - `outcome`: `'treasure_found'` if numbers are present, or `'no_treasure'` if none are found.
  - `sum`: The total sum of all discovered numbers.



## solution

## Usage Example

Here’s how you can use the `treasureFinder` function:

```javascript
const result1 = treasureFinder("a1b2c3");
// result1: {
//   outcome: 'treasure_found',
//   sum: 6,

// }

const result2 = treasureFinder("no numbers here!");
// result2: {
//   outcome: 'no_treasure',
//   sum: 0,

// }

const result3 = treasureFinder("gold123silver456");
// result3: {
//   outcome: 'treasure_found',
//   sum: 579,

// }


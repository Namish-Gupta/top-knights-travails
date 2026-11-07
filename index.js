import knightMoves from "./knightMoves.js";

const printKnightPath = (start, end) => {
    const path = knightMoves(start, end);
    const moveCount = path.length - 1;
    console.log(`=> You made it in ${moveCount} moves! Here's your path:`);
  
    for (const square of path) {
        console.log(`  [${square[0]}, ${square[1]}]`);
    }

    console.log();
}

// The Odin Project Test Cases
printKnightPath([0, 0], [1, 2]);
printKnightPath([0, 0], [3, 3]);
printKnightPath([3, 3], [0, 0]);
printKnightPath([3, 3], [4, 3]);
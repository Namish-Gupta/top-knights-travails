const getValidMoves = ([x, y]) => {
    const offsets = [
        [1, -2],
        [2, -1],
        [2, 1],
        [1, 2],
        [-1, 2],
        [-2, 1],
        [-2, -1],
        [-1, -2]
    ];
    const validMoves = [];
    for(const [dx, dy] of offsets) {
        const nx = x + dx, ny = y + dy;
        if(nx >= 0 && ny >= 0 && nx < 8 && ny < 8) validMoves.push([nx, ny]);
    }
    return validMoves;
};

const knightMoves = (p1, p2) => {
    const queue = [[p1]];

    const visited = new Set();
    visited.add(p1.toString);

    while(queue.length > 0) {
        const currPath = queue.shift();

        const currPos = currPath[currPath.length - 1];
        if(currPos[0] === p2[0] && currPos[1] === p2[1]) return currPath;

        const nextMoves = getValidMoves(currPos);

        for(const move of nextMoves) {
            const moveStr = move.toString();

            if(!visited.has(moveStr)){
                visited.add(moveStr);
                const newPath = [...currPath, move];
                queue.push(newPath);
            }
        }
    }

    console.log('This point will never be reached as the knight can reach any square on the chess board!');
};

export default knightMoves;
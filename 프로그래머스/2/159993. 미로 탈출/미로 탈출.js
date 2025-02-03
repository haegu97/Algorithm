function solution(maps) {
    const rowLength = maps.length;
    const colLength = maps[0].length;

    let findLCnt = -1; 
    const visitedL = Array.from({ length: rowLength }, () => Array(colLength).fill(-1));
    const visitedE = Array.from({ length: rowLength }, () => Array(colLength).fill(-1));

    const d = [
        [0, 1], [0, -1], [1, 0], [-1, 0] 
    ];

   
    const findL = (i, j) => {
        const q = [[i, j]];
        visitedL[i][j] = 0; 

        while (q.length > 0) {
            const [x, y] = q.shift();

            for (const [dx, dy] of d) {
                const nx = x + dx;
                const ny = y + dy;

                if (nx >= 0 && nx < rowLength && ny >= 0 && ny < colLength 
                    && visitedL[nx][ny] === -1 && maps[nx][ny] !== "X") {
                    
                    visitedL[nx][ny] = visitedL[x][y] + 1;
                    
                    if (maps[nx][ny] === "L") {
                        findLCnt = visitedL[nx][ny]; 
                        return [nx, ny]; 
                    }

                    q.push([nx, ny]);
                }
            }
        }

        return null;
    };

   
    const findE = (i, j) => {
        const q = [[i, j]];
        visitedE[i][j] = 0; 

        while (q.length > 0) {
            const [x, y] = q.shift();

            for (const [dx, dy] of d) {
                const nx = x + dx;
                const ny = y + dy;

                if (nx >= 0 && nx < rowLength && ny >= 0 && ny < colLength 
                    && visitedE[nx][ny] === -1 && maps[nx][ny] !== "X") {
                    
                    visitedE[nx][ny] = visitedE[x][y] + 1;

                    if (maps[nx][ny] === "E") {
                        return visitedE[nx][ny] + findLCnt; 
                    }

                    q.push([nx, ny]);
                }
            }
        }

        return -1;
    };

    for (let i = 0; i < rowLength; i++) {
        for (let j = 0; j < colLength; j++) {
            if (maps[i][j] === "S") {
                const LPos = findL(i, j); 
                if (!LPos) return -1; 
                return findE(LPos[0], LPos[1]); 
            }
        }
    }

    return -1;
}

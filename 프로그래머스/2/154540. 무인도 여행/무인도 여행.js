function solution(maps) {
    const answer = [];
    const visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));

    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    const bfs = (i, j) => {
        let sum = Number(maps[i][j]);
        const q = [[i, j]];
        visited[i][j] = true;

        while (q.length > 0) {
            const [x, y] = q.shift();
            
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];

                if (0 <= nx && nx < maps.length && 0 <= ny && ny < maps[0].length 
                    && !visited[nx][ny] && maps[nx][ny] !== "X") {
                    
                    visited[nx][ny] = true;
                    sum += Number(maps[nx][ny]);
                    q.push([nx, ny]);
                }
            }
        }
        return sum;
    };

    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] !== "X" && !visited[i][j]) {
                const result = bfs(i, j);
                answer.push(result);
            }
        }
    }

    return answer.length ? answer.sort((a, b) => a - b) : [-1]; 
}

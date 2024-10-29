const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const [M, N, K] = input.shift();

const graph = Array.from({ length: M }, () => Array(N).fill(0));

for (let i = 0; i < K; i++) {
  const bottomLeftX = input[i][0];
  const bottomLeftY = input[i][1];
  const topRightX = input[i][2];
  const topRightY = input[i][3];

  for (let j = bottomLeftY; j < topRightY; j++) {
    for (let k = bottomLeftX; k < topRightX; k++) {
      graph[j][k] = 1;
    }
  }
}

const bfs = (x, y) => {
  const q = [];
  q.push([x, y]);
  let tmp = 1;

  while (q.length) {
    const [curX, curY] = q.shift();
    visited[curX][curY] = 1;
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    for (let i = 0; i < 4; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      if (
        0 <= nx &&
        nx < M &&
        0 <= ny &&
        ny < N &&
        visited[nx][ny] === 0 &&
        graph[nx][ny] === 0
      ) {
        q.push([nx, ny]);
        visited[nx][ny] = 1;
        tmp++;
      }
    }
  }
  return tmp;
};

const visited = Array.from({ length: M }, () => Array(N).fill(0));
let cnt = 0;
const arr = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 0 && visited[i][j] === 0) {
      const result = bfs(i, j);
      arr.push(result);
      cnt++;
    }
  }
}

console.log(cnt);
arr.sort((a, b) => a - b);
console.log(arr.join(" "));

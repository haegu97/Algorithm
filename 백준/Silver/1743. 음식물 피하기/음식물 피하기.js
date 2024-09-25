const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();
input = input.split("\n");
const [N, M, K] = input[0].split(" ").map(Number);
const answer = [];

let newArr = [];

for (let i = 1; i <= K; i++) {
  const arr = input[i].split(" ").map(Number);
  newArr.push(arr);
}

const graph = Array.from({ length: N }, () => Array(M).fill(0));
const visited = Array.from({ length: N }, () => Array(M).fill(false));

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let result = 1;

newArr.forEach(([y, x]) => {
  graph[y - 1][x - 1] = 1;
});

const dfs = (y, x) => {
  visited[y][x] = true;

  for (let k = 0; k < 4; k++) {
    let ny = y + dy[k];
    let nx = x + dx[k];

    if (
      ny >= 0 &&
      ny < N &&
      nx >= 0 &&
      nx < M &&
      graph[ny][nx] === 1 &&
      !visited[ny][nx]
    ) {
      result += 1;
      dfs(ny, nx);
    }
  }
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (graph[i][j] == 1) {
      dfs(i, j);
      answer.push(result);
      result = 1;
    }
  }
}

console.log(Math.max(...answer));

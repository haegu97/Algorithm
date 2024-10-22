const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input.shift());
const graph = input.map((line) => line.split(" ").map(Number));

let visited = Array.from({ length: N }, () => Array(N).fill(0));
let answer = 1;

let maxHeight = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] > maxHeight) {
      maxHeight = graph[i][j];
    }
  }
}

const bfs = (x, y, height) => {
  const q = [[x, y]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  while (q.length) {
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        0 <= nx &&
        nx < N &&
        0 <= ny &&
        ny < N &&
        graph[nx][ny] > height &&
        visited[nx][ny] == 0
      ) {
        q.push([nx, ny]);
        visited[nx][ny] = 1;
      }
    }
  }
};

const resetVisited = () => {
  visited = Array.from({ length: N }, () => Array(N).fill(0));
};

for (let height = 1; height < maxHeight; height++) {
  let cnt = 0;
  resetVisited();
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] > height && visited[i][j] == 0) {
        bfs(i, j, height);
        cnt++;
      }
    }
  }
  answer = Math.max(cnt, answer);
}

console.log(answer);

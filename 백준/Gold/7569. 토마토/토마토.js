const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [N, M, H] = input.shift().split(" ").map(Number);
let graph = [];
let index = 0;

// 3차원 배열 생성
for (let h = 0; h < H; h++) {
  let temp = [];
  for (let m = 0; m < M; m++) {
    temp.push(input[index++].split(" ").map(Number));
  }
  graph.push(temp);
}

const visited = Array.from(Array(H), () =>
  Array.from(Array(M), () => Array(N).fill(0))
);

let q = [];
let head = 0;

// 익은 토마토 위치를 큐에 추가하고, 방문 처리
for (let i = 0; i < H; i++) {
  for (let j = 0; j < M; j++) {
    for (let k = 0; k < N; k++) {
      if (graph[i][j][k] === 1) {
        q.push([i, j, k]);
        visited[i][j][k] = 1;
      }
    }
  }
}

const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];

// BFS 탐색
while (head < q.length) {
  const [x, y, z] = q[head++];

  for (let i = 0; i < 6; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    const nz = z + dz[i];
    if (
      nx >= 0 &&
      nx < H &&
      ny >= 0 &&
      ny < M &&
      nz >= 0 &&
      nz < N &&
      graph[nx][ny][nz] === 0 &&
      visited[nx][ny][nz] === 0
    ) {
      visited[nx][ny][nz] = visited[x][y][z] + 1;
      graph[nx][ny][nz] = 1; // 익은 상태로 변경
      q.push([nx, ny, nz]);
    }
  }
}

let maxDays = 0;
let isAllRipe = true;

// 모든 토마토가 익었는지 검사하고, 최대 일수 계산
for (let i = 0; i < H; i++) {
  for (let j = 0; j < M; j++) {
    for (let k = 0; k < N; k++) {
      if (graph[i][j][k] === 0) {
        console.log(-1);
        isAllRipe = false;
        break;
      }
      maxDays = Math.max(maxDays, visited[i][j][k]);
    }
    if (!isAllRipe) break;
  }
  if (!isAllRipe) break;
}

if (isAllRipe) {
  console.log(maxDays - 1); // 첫 날을 제외하므로 -1
}

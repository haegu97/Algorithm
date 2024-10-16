let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let [N, M] = input[0].split(" ").map(Number);
input = input.slice(1).map((v) => v.split("").map(Number));
const visited = Array.from(new Array(N), () => new Array(M).fill(0).map(() => [0, 0])); // visited[y][x][isBreak]
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
const queue = [];

queue.push([0, 0, 0]);
visited[0][0][0] = 1; // 출발점 방문 처리

function BFS() {
  let idx = 0;

  while (idx !== queue.length) {
    const [y, x, isBreak] = queue[idx];

    // 도착점에 도달한 경우
    if (x === M - 1 && y === N - 1) {
      return visited[y][x][isBreak];
    }

    for (let i = 0; i < dx.length; i++) {
      const [ny, nx] = [y + dy[i], x + dx[i]];

      // 이동할 위치가 유효한 경우
      if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
        // 이동할 위치가 통로(0)인 경우
        if (input[ny][nx] === 0 && visited[ny][nx][isBreak] === 0) {
          visited[ny][nx][isBreak] = visited[y][x][isBreak] + 1; // 최단 경로 길이 업데이트
          queue.push([ny, nx, isBreak]);
        } 
        // 이동할 위치가 벽(1)인 경우
        else if (input[ny][nx] === 1 && isBreak === 0) {
          visited[ny][nx][isBreak + 1] = visited[y][x][isBreak] + 1; // 최단 경로 길이 업데이트
          queue.push([ny, nx, isBreak + 1]); // 벽을 부순 상태로 큐에 추가
        }
      }
    }
    idx++;
  }

  return -1; // 도착점에 도달할 수 없는 경우
}

console.log(BFS());

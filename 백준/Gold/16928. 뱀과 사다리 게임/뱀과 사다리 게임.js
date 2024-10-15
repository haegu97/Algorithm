const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: 101 }, (_, i) => i); // 0~100

// 사다리와 뱀의 정보를 graph에 저장
for (let i = 0; i < N + M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  graph[start] = end; // 1-based index 사용
}

const queue = [];
const visited = Array(101).fill(false);
queue.push(1); // 시작 위치 1
visited[1] = true;

let moves = 0;

// BFS를 통한 최단 경로 탐색
while (queue.length) {
  let size = queue.length;

  for (let i = 0; i < size; i++) {
    const current = queue.shift();

    // 도착 지점 체크
    if (current === 100) {
      console.log(moves);
      process.exit(0);
    }

    // 주사위 굴리기
    for (let dice = 1; dice <= 6; dice++) {
      const next = current + dice;
      if (next <= 100) {
        const destination = graph[next]; // 사다리나 뱀 효과 적용
        if (!visited[destination]) {
          visited[destination] = true;
          queue.push(destination);
        }
      }
    }
  }

  moves++;
}

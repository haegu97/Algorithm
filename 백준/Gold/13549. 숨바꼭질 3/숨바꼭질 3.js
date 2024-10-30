const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");

const [start, end] = input[0].split(" ").map(Number);

const bfs = () => {
  const q = [[start, 0]];
  const visited = new Array(100001).fill(false);
  visited[start] = true;

  while (q.length) {
    const [position, time] = q.shift();

    // 도착했을 경우 시간 출력
    if (position === end) {
      console.log(time);
      return;
    }

    // 다음 이동을 위한 반복문
    for (let next of [position * 2, position - 1, position + 1]) {
      if (next < 0 || next > 100000 || visited[next]) continue;

      if (next === position * 2) {
        q.unshift([next, time]); // 순간이동 시 현재 시간 유지
      } else {
        q.push([next, time + 1]); // 걷기 시 시간 증가
      }
      visited[next] = true; // 방문 처리
    }
  }
};

bfs();

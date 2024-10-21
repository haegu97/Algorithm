const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(Number);

const start = input[0];
const end = input[1];

if (start === end) {
  console.log(0);
  console.log(1);
  return;
}

const MAX = 100001; // 문제의 범위는 0부터 100,000까지
const graph = Array(MAX).fill(0); // 각 위치까지의 최단 거리
const ways = Array(MAX).fill(0); // 해당 위치까지의 경우의 수

const queue = [start];
graph[start] = 1; // 시작 위치를 방문 표시로 1로 설정
ways[start] = 1; // 시작 위치의 경우의 수는 1

while (queue.length) {
  const current = queue.shift();

  for (let next of [current + 1, current - 1, current * 2]) {
    if (next < 0 || next >= MAX) continue;

    if (graph[next] === 0) {
      // 처음 방문하는 경우
      graph[next] = graph[current] + 1;
      ways[next] = ways[current];
      queue.push(next);
    } else if (graph[next] === graph[current] + 1) {
      // 이미 방문했지만 최단 거리로 도달하는 경우
      ways[next] += ways[current];
    }
  }
}

console.log(graph[end] - 1); // 최단 거리 출력 (graph 배열에서 시작을 1로 초기화했으므로 1을 빼줌)
console.log(ways[end]); // 최단 거리의 경우의 수 출력

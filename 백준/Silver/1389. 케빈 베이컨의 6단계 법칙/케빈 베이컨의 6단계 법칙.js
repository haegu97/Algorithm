const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));
const [N, M] = input.shift();
const graph = Array.from(Array(N + 1), () => []);
input.forEach(([start, end]) => {
  graph[start].push(end);
  graph[end].push(start);
});

const bfs = (start, end) => {
  const q = [[start, 0]];
  const visited = Array(N + 1).fill(0);

  while (q.length) {
    const [cur, distance] = q.shift();
    if (visited[cur] === 1) {
      continue;
    }
    visited[cur] = 1;

    if (cur === end) {
      return distance;
    }

    for (const next of graph[cur]) {
      if (visited[next] === 0) {
        q.push([next, distance + 1]);
      }
    }
  }
};

const result = [];
for (let i = 1; i <= N; i++) {
  let cnt = 0;
  for (let j = 1; j <= N; j++) {
    const distance = bfs(i, j);
    cnt += distance;
  }
  result.push(cnt);
}

const minValue = Math.min(...result);
console.log(result.indexOf(minValue) + 1);

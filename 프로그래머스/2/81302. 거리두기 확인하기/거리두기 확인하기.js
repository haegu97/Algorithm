function search(x, y, places) {
  const q = [[x, y, 0]];
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const visited = Array.from({ length: 5 }, () => Array(5).fill(false));
  visited[x][y] = true;

  while (q.length) {
    const [cx, cy, distance] = q.shift();

    if (distance > 2) {
      continue;
    }

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5 && !visited[nx][ny]) {
        if (places[nx][ny] === "P" && distance < 2) {
          return 0;
        }
        if (places[nx][ny] === "O") {
          visited[nx][ny] = true;
          q.push([nx, ny, distance + 1]);
        }
      }
    }
  }

  return 1;
}

function solution(places) {
  const answer = [];

  for (const place of places) {
    let valid = 1;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        if (place[i][j] === "P") {
          if (search(i, j, place) === 0) {
            valid = 0;
            break;
          }
        }
      }
      if (valid === 0) break;
    }

    answer.push(valid);
  }

  return answer;
}

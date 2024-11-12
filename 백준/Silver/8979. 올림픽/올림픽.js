const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);

input = input.map((line) => line.split(" ").map(Number));

input.sort((a, b) => {
  if (b[1] !== a[1]) return b[1] - a[1];
  else if (b[2] !== a[2]) return b[2] - a[2];
  else return b[3] - a[3];
});

let rank = 1;
input[0][4] = rank;

for (let i = 1; i < N; i++) {
  if (
    input[i][1] === input[i - 1][1] &&
    input[i][2] === input[i - 1][2] &&
    input[i][3] === input[i - 1][3]
  ) {
    input[i][4] = rank;
  } else {
    rank = i + 1;
    input[i][4] = rank;
  }
}

const answer = input.find((v) => v[0] === K)[4];
console.log(answer);

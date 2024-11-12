const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input
  .shift()
  .split(" ")
  .map((v) => Number(v));

input = input.map((line) => line.split(" ").map((v) => Number(v)));

input.sort((a, b) => {
  if (a[1] !== b[1]) return b[1] - a[1];
  else if (a[2] !== b[2]) return b[2] - a[2];
  else return a[3] - b[3];
});

let same = 1;
input[0][4] = 1;

for (let i = 1; i < N; i++) {
  if (
    input[i][1] === input[i - 1][1] &&
    input[i][2] === input[i - 1][2] &&
    input[i][3] === input[i - 1][3]
  ) {
    input[i][4] = input[i - 1][4];
    same++;
  } else {
    input[i][4] = input[i - 1][4] + same;
    same = 1;
  }
}

const answer = input.find((v) => v[0] === K)[4];
console.log(answer);

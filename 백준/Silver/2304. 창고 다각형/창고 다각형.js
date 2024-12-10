const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
input = input.map((line) => line.split(" ").map(Number));

let sum = 0;
let max = 0;
let min = 0;

input = input.sort((a, b) => b[1] - a[1]);

for (let i = 0; i < N; i++) {
  if (i === 0) {
    sum += input[0][1];
    max = input[0][0];
    min = input[0][0];
  } else {
    if (input[i][0] > max) {
      sum += (input[i][0] - max) * input[i][1];
      max = input[i][0];
    } else if (input[i][0] < min) {
      sum += (min - input[i][0]) * input[i][1];
      min = input[i][0];
    }
  }
}

console.log(sum);

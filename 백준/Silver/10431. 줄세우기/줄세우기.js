const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());
input = input.map((line) => line.split(" ").map(Number));

const answer = [];

for (let i = 0; i < T; i++) {
  let tmp = 0;
  for (let j = 2; j < input[i].length; j++) {
    for (let k = 1; k < j; k++) {
      if (input[i][j] < input[i][k]) {
        tmp++;
      }
    }
  }
  answer.push(`${input[i][0]} ${tmp}`);
}

console.log(answer.join("\n"));

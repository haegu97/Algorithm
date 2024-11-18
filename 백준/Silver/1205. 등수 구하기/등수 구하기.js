const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, myPoint, P] = input.shift().split(" ").map(Number);
let scores = input.length > 0 ? input[0].split(" ").map(Number) : [];

if (N === 0) {
  console.log(1);
  return;
}

scores.push(myPoint);
scores.sort((a, b) => b - a);

const rank = scores.indexOf(myPoint) + 1;
const count = scores.filter((score) => score === myPoint).length;

if (rank > P || (rank + count - 1 > P && scores[P - 1] === myPoint)) {
  console.log(-1);
} else {
  console.log(rank);
}

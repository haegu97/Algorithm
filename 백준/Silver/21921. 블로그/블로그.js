const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, X] = input.shift().split(" ").map(Number);
input = input[0].split(" ").map(Number);

let max = 0;
let cnt = 1;
let tmp = 0;

for (let i = 0; i < X; i++) {
  tmp += input[i];
}
max = tmp;

for (let i = X; i < N; i++) {
  tmp += input[i] - input[i - X];
  if (tmp > max) {
    max = tmp;
    cnt = 1;
  } else if (tmp === max) {
    cnt++;
  }
}

if (max === 0) {
  console.log("SAD");
} else {
  console.log(max);
  console.log(cnt);
}

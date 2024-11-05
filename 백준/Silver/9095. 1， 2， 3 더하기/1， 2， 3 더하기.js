const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const T = input.shift();

for (let test of input) {
  const dp = new Array(test).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= test; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  console.log(dp[test]);
}

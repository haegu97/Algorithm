const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const day = Number(input.shift());
  const prices = input.shift().split(" ").map(Number);

  let maxPrice = 0;
  let profit = 0;

  for (let j = day - 1; j >= 0; j--) {
    if (prices[j] > maxPrice) {
      maxPrice = prices[j];
    } else {
      profit += maxPrice - prices[j];
    }
  }

  console.log(profit);
}

const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K, P, X] = input;

const screen = [
  "1110111",
  "0010010",
  "1011101",
  "1011011",
  "0111010",
  "1101011",
  "1101111",
  "1010010",
  "1111111",
  "1111011",
];

const counts = Array.from({ length: 10 }, () => Array(10).fill(0));

for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    let count = 0;
    for (let k = 0; k < 7; k++) {
      if (screen[i][k] !== screen[j][k]) {
        count++;
      }
    }
    counts[i][j] = count;
  }
}

let answer = 0;

for (let i = 1; i <= N; i++) {
  let current = X;
  let target = i;
  let flipCnt = 0;

  for (let j = 0; j < K; j++) {
    const currentNumber = Math.floor(current % 10);
    const targetNumber = Math.floor(target % 10);

    flipCnt += counts[currentNumber][targetNumber];

    current = Math.floor(current / 10);
    target = Math.floor(target / 10);
  }

  if (flipCnt >= 1 && flipCnt <= P) {
    answer++;
  }
}

console.log(answer);

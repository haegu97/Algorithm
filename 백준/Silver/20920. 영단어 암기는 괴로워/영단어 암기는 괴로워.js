const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => +v);
let words = new Map();
for (let i = 0; i < input.length; i++) {
  if (input[i].length >= M) words.set(input[i], (words.get(input[i]) || 0) + 1);
}

words = [...words]
  .sort((a, b) => {
    if (a[1] === b[1]) {
      if (a[0].length === b[0].length) {
        return a[0] < b[0] ? -1 : 1;
      } else {
        return b[0].length - a[0].length;
      }
    } else {
      return b[1] - a[1];
    }
  })
  .map((v) => v[0])
  .join("\n");

console.log(words);
const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const li = [0, ...input[2].split(" ").map(Number), N];

function bs(li, m) {
  if (li[1] - li[0] > m) return false;
  if (li[li.length - 1] - li[li.length - 2] > m) return false;

  for (let i = 1; i < li.length - 2; i++) {
    if ((li[i + 1] - li[i]) / 2 > m) return false;
  }

  return true;
}

let s = 0;
let e = N;
let res = 0;

while (s <= e) {
  const m = Math.floor((s + e) / 2);

  if (bs(li, m)) {
    e = m - 1;
    res = m;
  } else {
    s = m + 1;
  }
}

console.log(res);

const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const tunnelLength = Number(input[0]);
const lightCnt = Number(input[1]);
const lights = input[2].split(" ").map(Number);

function isValid(lights, height) {
  if (lights[0] > height) return false;
  if (tunnelLength - lights[lightCnt - 1] > height) return false;

  for (let i = 0; i < lights.length - 1; i++) {
    if ((lights[i + 1] - lights[i]) / 2 > height) return false;
  }

  return true;
}

let s = 0;
let e = tunnelLength;
let res = 0;

while (s <= e) {
  const mid = Math.floor((s + e) / 2);

  if (isValid(lights, mid)) {
    e = mid - 1;
    res = mid;
  } else {
    s = mid + 1;
  }
}

console.log(res);

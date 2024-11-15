const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let newInput = [...new Set(input)];

const [N, Game] = newInput.shift().split(" ");

if (Game === "Y") {
  console.log(Math.floor(newInput.length / 1));
}

if (Game === "F") {
  console.log(Math.floor(newInput.length / 2));
}

if (Game === "O") {
  console.log(Math.floor(newInput.length / 3));
}

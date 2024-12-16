const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [N, K] = input.shift().split(" ").map(Number);
const durability = input[0].split(" ").map(Number);

let belt = Array(2 * N).fill(false);
let step = 0;

while (true) {
  step++;

  durability.unshift(durability.pop());
  belt.unshift(belt.pop());
  if (belt[N - 1] === true) {
    belt[N - 1] = false;
  }

  for (let i = N - 2; i >= 0; i--) {
    if (belt[i] === true && belt[i + 1] === false && durability[i + 1] > 0) {
      belt[i] = false;
      belt[i + 1] = true;
      durability[i + 1]--;
    }
  }
  if (belt[N - 1] === true) {
    belt[N - 1] = false;
  }

  if (durability[0] > 0) {
    belt[0] = true;
    durability[0]--;
  }

  const cntZero = durability.filter((value) => value === 0).length;
  if (cntZero >= K) {
    console.log(step);
    break;
  }
}

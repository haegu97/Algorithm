const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const numberOfSwitches = Number(input[0]);
let switches = input[1].split(" ").map(Number);
const numberOfStudents = Number(input[2]);
const students = input.slice(3).map((v) => v.split(" ").map(Number));

for (let i = 0; i < numberOfStudents; i++) {
  if (students[i][0] === 1) {
    const multiplier = students[i][1];
    for (let j = multiplier - 1; j < numberOfSwitches; j += multiplier) {
      switches[j] = switches[j] === 0 ? 1 : 0;
    }
  }

  if (students[i][0] === 2) {
    const position = students[i][1] - 1;
    switches[position] = switches[position] === 0 ? 1 : 0;

    let plus = 1;
    while (
      position - plus >= 0 &&
      position + plus < numberOfSwitches &&
      switches[position - plus] === switches[position + plus]
    ) {
      switches[position - plus] = switches[position - plus] === 0 ? 1 : 0;
      switches[position + plus] = switches[position + plus] === 0 ? 1 : 0;
      plus++;
    }
  }
}

let output = "";
for (let i = 0; i < numberOfSwitches; i++) {
  output += switches[i] + " ";
  if ((i + 1) % 20 === 0) {
    output = output.trim();
    console.log(output);
    output = "";
  }
}
if (output.length > 0) {
  console.log(output.trim());
}

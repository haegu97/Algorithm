const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input.shift());
const numbers = input[0].split(" ").map(Number);

numbers.sort((a, b) => a - b);

let leftPointer = 0;
let rightPointer = numbers.length - 1;

let leftPointerAnswer = leftPointer;
let rightPointerAnswer = rightPointer;

let sum = numbers[leftPointer] + numbers[rightPointer];

while (leftPointer < rightPointer) {
  let tmp = numbers[leftPointer] + numbers[rightPointer];

  if (Math.abs(tmp) < Math.abs(sum)) {
    sum = tmp;
    leftPointerAnswer = leftPointer;
    rightPointerAnswer = rightPointer;
  }

  if (tmp === 0) break;

  if (tmp > 0) {
    rightPointer--;
  } else {
    leftPointer++;
  }
}

console.log(`${numbers[leftPointerAnswer]} ${numbers[rightPointerAnswer]}`);
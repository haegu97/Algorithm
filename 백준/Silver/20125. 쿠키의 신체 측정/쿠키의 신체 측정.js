const fs = require("fs");

let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = parseInt(input.shift());

const findHead = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (input[i][j] === "*") {
        return [i + 1, j];
      }
    }
  }
};

const [x, y] = findHead();

const getLeftArmLength = (x, y) => {
  let cnt = 0;
  for (let i = y - 1; i >= 0; i--) {
    if (input[x][i] === "*") {
      cnt++;
    } else {
      break;
    }
  }
  return cnt;
};

const getRightArmLength = (x, y) => {
  let cnt = 0;
  for (let i = y + 1; i < N; i++) {
    if (input[x][i] === "*") {
      cnt++;
    } else {
      break;
    }
  }
  return cnt;
};

const getWaistLength = (x, y) => {
  let cnt = 0;
  for (let i = x + 1; i < N; i++) {
    if (input[i][y] === "*") {
      cnt++;
    } else {
      break;
    }
  }
  return cnt;
};

const getLeftLegLength = (x, y, waistLength) => {
  let cnt = 0;
  for (let i = x + waistLength + 1; i < N; i++) {
    if (input[i][y - 1] === "*") {
      cnt++;
    } else {
      break;
    }
  }
  return cnt;
};

const getRightLegLength = (x, y, waistLength) => {
  let cnt = 0;
  for (let i = x + waistLength + 1; i < N; i++) {
    if (input[i][y + 1] === "*") {
      cnt++;
    } else {
      break;
    }
  }
  return cnt;
};

const leftArmLength = getLeftArmLength(x, y);
const rightArmLength = getRightArmLength(x, y);
const waistLength = getWaistLength(x, y);
const leftLegLength = getLeftLegLength(x, y, waistLength);
const rightLegLength = getRightLegLength(x, y, waistLength);

console.log(`${x + 1} ${y + 1}`);
console.log(
  `${leftArmLength} ${rightArmLength} ${waistLength} ${leftLegLength} ${rightLegLength}`
);

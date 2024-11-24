const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

let index = 0;
let tmp = 0;

while (index < input.length) {
    
  tmp++;
    
    
  const tmpString = tmp.toString();
  for (let i = 0; i < tmpString.length; i++) {
    if (tmpString[i] === input[index]) index++;
  }
}

console.log(tmp);

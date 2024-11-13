const fs = require("fs");

let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const ACCECPTABLE_MESSAGE = "is acceptable.";
const NOT_ACCEPTABLE_MESSAGE = "is not acceptable.";

input.forEach((password) => {
  if (password === "end") {
    return;
  }

  let vowelCnt = 0;
  let sequenceVowel = 0;
  let sequenceConsonant = 0;
  const vowel = ["a", "e", "i", "o", "u"];
  let isAcceptable = true;

  for (let i = 0; i < password.length; i++) {
    if (vowel.includes(password[i])) {
      vowelCnt++;
      sequenceVowel++;
      sequenceConsonant = 0;
      if (sequenceVowel === 3) {
        isAcceptable = false;
        break;
      }
    } else {
      sequenceVowel = 0;
      sequenceConsonant++;
      if (sequenceConsonant === 3) {
        isAcceptable = false;
        break;
      }
    }

    if (
      i > 0 &&
      password[i] === password[i - 1] &&
      password[i] !== "e" &&
      password[i] !== "o"
    ) {
      isAcceptable = false;
      break;
    }
  }

  if (vowelCnt === 0) {
    isAcceptable = false;
  }

  if (isAcceptable) {
    console.log(`<${password}> ${ACCECPTABLE_MESSAGE}`);
  } else {
    console.log(`<${password}> ${NOT_ACCEPTABLE_MESSAGE}`);
  }
});

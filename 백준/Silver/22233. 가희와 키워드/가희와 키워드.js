const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);

const keywords = new Set(input.slice(1, N + 1));
const usedKeywords = input.slice(N + 1);

const result = [];

usedKeywords.forEach((line) => {
  const word = line.split(",");

  word.forEach((v) => {
    keywords.delete(v);
  });

  result.push(keywords.size);
});

console.log(result.join("\n"));

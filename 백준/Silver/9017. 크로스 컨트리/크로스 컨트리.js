const fs = require("fs");
let input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const N = Number(input.shift());
  let teamNumbers = input.shift().split(" ").map(Number);
  let team = Array(201).fill(0);
  let exclude = Array(201).fill(false);

  teamNumbers.forEach((num) => {
    team[num]++;
    if (team[num] < 6) {
      exclude[num] = true;
    } else {
      exclude[num] = false;
    }
  });

  let ranking = 1;
  let data = Array(201)
    .fill(null)
    .map(() => [0, 0, 0]);

  teamNumbers.forEach((num) => {
    if (!exclude[num]) {
      if (data[num][0] < 4) {
        data[num][0]++;
        data[num][1] += ranking;
      } else if (data[num][0] === 4) {
        data[num][0]++;
        data[num][2] = ranking;
      }
      ranking++;
    }
  });

  let validTeams = [];
  for (let j = 1; j <= 200; j++) {
    if (team[j] >= 6) {
      validTeams.push([j, ...data[j]]);
    }
  }

  validTeams.sort((a, b) => {
    if (a[2] === b[2]) return a[3] - b[3];
    else return a[2] - b[2]; 
  });

  console.log(validTeams[0][0]); 
}

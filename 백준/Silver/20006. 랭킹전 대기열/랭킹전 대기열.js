const fs = require("fs");

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [playerCnt, maxCnt] = input[0].split(" ").map(Number);

const players = input.slice(1).map((line) => {
  const [level, nickname] = line.split(" ");
  return { level: Number(level), nickname };
});

const rooms = [];
players.forEach(({ level, nickname }) => {
  let matchedRoom = null;
  for (const room of rooms) {
    const [minLevel, maxLevel] = [room[0].level - 10, room[0].level + 10];
    if (room.length < maxCnt && minLevel <= level && level <= maxLevel) {
      matchedRoom = room;
      break;
    }
  }

  if (matchedRoom) {
    matchedRoom.push({ level, nickname });
  } else {
    rooms.push([{ level, nickname }]);
  }
});

rooms.forEach((room) => {
  room.sort((a, b) => a.nickname.localeCompare(b.nickname));

  if (room.length === maxCnt) {
    console.log("Started!");
    room.forEach(({ level, nickname }) => {
      console.log(`${level} ${nickname}`);
    });
  } else {
    console.log("Waiting!");
    room.forEach(({ level, nickname }) => {
      console.log(`${level} ${nickname}`);
    });
  }
});

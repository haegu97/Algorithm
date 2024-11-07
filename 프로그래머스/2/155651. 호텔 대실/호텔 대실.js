function solution(book_time) {
  book_time.sort();
  const room = [];
  book_time.forEach((t) => {
    const tmp = t[0].split(":");
    const startTime = Number(tmp[0]) * 60 + Number(tmp[1]);
    const idx = room.findIndex((e) => e <= startTime);
    if (idx === -1) room.push(getNextTime(t[1]));
    else room[idx] = getNextTime(t[1]);
  });
  return room.length;
}
function getNextTime(endTime) { 
  const next = endTime.split(":");
  return Number(next[0]) * 60 + Number(next[1]) + 10;
}

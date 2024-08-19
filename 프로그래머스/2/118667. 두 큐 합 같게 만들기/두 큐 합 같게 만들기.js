function solution(queue1, queue2) {
  var answer = -1;
  let queue1Count = queue1.reduce((a, b) => a + b);
  let queue1Idx = 0;
  let queue2Count = queue2.reduce((a, b) => a + b);
  let queue2Idx = queue1.length - 1;
  const arr = queue1.concat(queue2);

  for (let i = 0; i < queue1Count + queue2Count; i++) {
    if (queue1Count === queue2Count) {
      answer = i;
      break;
    } else if (queue1Count > queue2Count) {
      const count = arr[queue1Idx++];
      queue1Count -= count;
      queue2Count += count;
    } else {
      const count = arr[++queue2Idx];
      queue2Count -= count;
      queue1Count += count;
    }
  }
  return answer;
}

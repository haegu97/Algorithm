function solution(order) {
  var answer = 0;
  const box = [];
  for (let i = 1; i <= order.length; i++) {
    box.push(i);

    while (box.length !=0 && box.at(-1) == order[answer]) {
      box.pop();
      answer++;
    }
  }
  return answer;
}

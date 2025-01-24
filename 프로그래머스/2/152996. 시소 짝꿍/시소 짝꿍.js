function solution(weights) {
  const map = {};
  const ratio = [1, 3 / 2, 4 / 3, 2]; 
  let result = 0;

  weights.sort((a, b) => b - a);

  for (const weight of weights) {
    for (const v of ratio) {
      if (map[weight * v]) {
        result += map[weight * v];
      }
    }

    if (map[weight]) {
      map[weight] += 1;
    } else {
      map[weight] = 1;
    }
  }

  return result;
}

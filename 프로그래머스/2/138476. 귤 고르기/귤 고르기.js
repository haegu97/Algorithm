function solution(k, tangerine) {
    let answer = 0
    const tangerine_map = {};

    tangerine.forEach((t) => (tangerine_map[t] = (tangerine_map[t] || 0) + 1));
    const tArr = Object.values(tangerine_map).sort((a, b) => b - a)
    
    for (const t of tArr) {
    answer++;
    if (k > t) k -= t;
    else break;
  }
    return answer
}
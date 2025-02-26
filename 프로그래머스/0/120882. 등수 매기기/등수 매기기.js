function solution(score) {
    const sumArr = score.map((v) => v[0] + v[1])
    const sortedArr = [...sumArr].sort((a, b) => b - a)
    
    return sumArr.map((v) => sortedArr.indexOf(v) + 1)
}
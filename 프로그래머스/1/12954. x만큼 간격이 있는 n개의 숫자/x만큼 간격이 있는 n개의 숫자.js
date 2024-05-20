function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++ ){
        let num = i * x
        answer.push(num)
    }
    return answer;
}
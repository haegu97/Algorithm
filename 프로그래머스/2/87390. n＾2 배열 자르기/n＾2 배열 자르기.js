function solution(n, left, right) {
    var answer = [];
    var q = 0;
    var r = 0;
    for (let i = left; i <= right; i++) {
   
        q = Math.floor(i / n);
        
        r = i % n;
        
        answer.push(Math.max(q+1, r+1));
    }
    return answer;
}
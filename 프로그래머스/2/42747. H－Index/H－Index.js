function solution(citations) {
    citations.sort((a, b) => b - a)
    for(let i = 0; i < citations.length; i++){
        if(citations[i] <= i){
            let answer = i
            return answer
        }
    }
    return citations.length;
}
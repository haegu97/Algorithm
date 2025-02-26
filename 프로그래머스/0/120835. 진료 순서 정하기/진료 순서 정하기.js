function solution(emergency) {
    const arr = [...emergency].sort((a, b) => b - a)
    
    const answer = []
    
    for(let i = 0; i < emergency.length; i++){
        answer.push(arr.indexOf(emergency[i])+1)
    }
    return answer
}
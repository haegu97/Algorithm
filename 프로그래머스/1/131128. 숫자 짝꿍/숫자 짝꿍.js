function solution(X, Y) {
    let answer = ""
    
    X = X.split("")
    Y = Y.split("")
    
    for(let i = 0; i < 10; i++){
        const XNumberCnt = X.filter(v => Number(v) === i).length
        const YNumberCnt = Y.filter(v => Number(v) === i).length
        
        answer += String(i).repeat(Math.min(XNumberCnt, YNumberCnt))
    }
    
    if(answer === ""){
        return "-1"
    }
    
    if(Number(answer) === 0){
        return "0"
    }
    
    return answer.split("").sort((a, b) => Number(b) - Number(a)).join("")
    
    
}
function solution(s){
    let answer = true
    
    const word = s.toLowerCase()
    let cntP = 0
    let cntY = 0
    
    for(let i = 0; i < s.length; i++){
        if(word[i] == "p"){
            cntP++
        }else if(word[i] == "y"){
            cntY++
        }
    }
    if(cntP != cntY){
        answer = false
    }
    return answer
    
}
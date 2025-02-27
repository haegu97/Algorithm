function solution(s, n) {
    let upperAlph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowerAlph = "abcdefghijklmnopqrstuvwxyz";
    
    let answer = ""
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === " "){
            answer += " "
            continue
        }
        let arr = upperAlph.includes(s[i]) ? upperAlph : lowerAlph
        let index = arr.indexOf(s[i]) + n
        
        if(index >= arr.length){
            index -= arr.length
        }
        
        answer += arr[index]
    }
    return answer
}
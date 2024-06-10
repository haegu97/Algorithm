function solution(s){
    let tmp = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] == "("){
            tmp++
        }else{
            tmp -= 1
        }
        if(tmp == -1){
            return false
        }
    }
    if(tmp == 0){
        return true
    }else{
        return false
    }
    
}

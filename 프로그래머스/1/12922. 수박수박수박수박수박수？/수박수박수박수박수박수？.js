function solution(n) {
    
    let tmp = ""
    
        for(let i = 0; i < n; i++){
            if(i % 2 == 0){
                tmp += "수"
            }else{
                tmp += "박"
            }
        }
    return tmp
    }
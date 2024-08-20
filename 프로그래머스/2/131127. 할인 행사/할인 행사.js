function solution(want, number, discount) {
    let answer = 0
    
    for(let i = 0; i <= discount.length-10; i++){
        const tmp = discount.slice(i, i+10)
        let isOk = true
        for(let j = 0; j < want.length; j++){
            if(tmp.filter(thing => thing == want[j]).length != number[j]){
                isOk = false
                break
            }
        }
        if(isOk == true){
            answer++
        }
        }
    return answer
}
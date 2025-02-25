function solution(order) {
    let cnt = 0
    
    const arr = Array.from(order.toString())
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === "3" || arr[i] === "6" || arr[i] === "9"){
            cnt++
        }
    }
    return cnt
}
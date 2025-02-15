function solution(n) {
    let num = Math.sqrt(n)
    
    if(num % 1 !== 0){
        return -1
    }
    else{
        return (num + 1) * (num + 1)
    }
}
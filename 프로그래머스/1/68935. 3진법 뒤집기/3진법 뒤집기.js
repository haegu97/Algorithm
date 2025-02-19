function solution(n) {
    let result = ""

    
    while (n > 0) {
        result += (n % 3)
        n = Math.floor(n / 3)
    }

  
    return parseInt(result, 3)
}

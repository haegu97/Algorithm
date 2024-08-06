function solution(n, k) {
    const num = n.toString(k);
    let cnt = 0
    
    function isPrimeNum(number) {
        if (number < 2) return false; 
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false; 
            }
        }
        return true; 
    }
    const splitNums = num.split('0');
    
    for(const splitNum of splitNums){
        if(isPrimeNum(splitNum)){
            cnt++
        }
    }
    return cnt
}
function solution(array, n) {
    let result = Infinity
    let tmpNumber = Infinity
    
    for(num of array){
        const gap = Math.abs(n - num)
        
        if(result > gap){
            result = gap
            tmpNumber = num
        }
        else if(result === gap){
            if(tmpNumber > num){
                tmpNumber = num
            }
        }
    }
    return tmpNumber
}
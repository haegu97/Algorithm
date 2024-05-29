function solution(n, lost, reserve) {
    
    let lostStudent = lost.filter(num => !reserve.includes(num)).sort((a,b)=>a-b)
    let reserveStudent = reserve.filter(num => !lost.includes(num)).sort((a,b)=>a-b)
    
    let answer = n - lostStudent.length
    
    lostStudent.forEach((num) => {
        if(reserveStudent.length === 0){
            return
        }
        if(reserveStudent.includes(num-1)){
            reserveStudent = reserveStudent.filter((a) => a !== num-1)
            answer ++
        }
        else if(reserveStudent.includes(num+1)){
            reserveStudent = reserveStudent.filter((a => a !== num+1))
            answer ++
        }
    })
    
    return answer;
}
function solution(n) {
    let answer = []
    
    function move(n,start,end,tmp){
        if(n === 1){
            answer.push([start, end])
            return
        }
        move(n-1,start,tmp,end)
        answer.push([start,end])
        move(n-1,tmp,end,start)
    }
    move(n,1,3,2)
    return answer
}
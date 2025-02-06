function solution(x, y, n) {
    const q = [[y, 0]]
    
    while(q.length > 0){
        const [cur, cnt] = q.shift()
        
        if(cur === x){
            return cnt
        }
        
        if(cur / 2 > 0 && cur % 2 === 0){
            q.push([cur / 2, cnt + 1])
        }
        
        if(cur / 3 > 0 && cur % 3 === 0){
            q.push([cur / 3, cnt + 1])
        }
        
        if(cur - n >= x){
            q.push([cur - n, cnt + 1])
        }
    }
    
    return -1
}
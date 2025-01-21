function solution(storey) {
    let cnt = 0;
    
    while (storey !== 0) {
        let cur = storey % 10;
        let next = Math.floor(storey / 10) % 10; 
        
        
        if (cur > 5 || (cur === 5 && next >= 5)) {
            cnt += (10 - cur);
            storey += (10 - cur); 
        } else {
            cnt += cur;
        }
        storey = Math.floor(storey / 10);
    }
    
    return cnt;
}

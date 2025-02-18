function solution(n,a,b){
    let player1 = a
    let player2 = b
    
    let cnt = 1
    while(true){
        player1 = Math.ceil(player1 / 2)
        player2 = Math.ceil(player2 / 2)
        
        if(player1 === player2){
            return cnt
        }
        
        cnt++
    }
}
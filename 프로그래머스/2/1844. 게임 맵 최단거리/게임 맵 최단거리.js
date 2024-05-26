function solution(maps) {
    const row = maps.length;
    const col = maps[0].length;
    const endRow = row - 1
    const endCol = col - 1
    const dx = [0,0,1,-1]
    const dy = [1,-1,0,0]
    
    const q = []
    q.push([0,0,1]) 
    
    while(q.length){
        const[x, y, move] = q.shift()
        if(x === endCol && y === endRow) return move
        
        for(let i = 0; i < 4; i++){
            const nx = x + dx[i]
            const ny = y + dy[i]
            if(nx >= 0 && nx < col && ny >= 0 && ny < row && maps[ny][nx] === 1){
                q.push([nx, ny, move+1])
                maps[ny][nx] = 0
            }
        }
    }
    return -1;
}
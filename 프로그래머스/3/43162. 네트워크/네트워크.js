function solution(n, computers) {
    const  visited = Array.from({length: n}, ()=>0)
    let answer = 0
    
    for(let i = 0; i < n; i++){
        if(!visited[i]){
            DFS(i)
            answer++
        }
    }
    
    function DFS(node){
        visited[node] = 1
        for(let i = 0; i < n; i++){
            if(computers[node][i] && !visited[i]){
                DFS(i)
            }
        }
    }
    return answer;
}
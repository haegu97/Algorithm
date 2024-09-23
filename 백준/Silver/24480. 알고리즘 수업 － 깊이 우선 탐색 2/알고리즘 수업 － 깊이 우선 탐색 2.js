const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n'); 
const [N,M,R] = input.shift().split(' ').map(v => +v); 
const arr = input.map((el) => el.split(' ').map(v => +v)); 
const graph = [...Array(N+1)].map(()=> []); 
const visited  = new Array(N+1).fill(0); 
for(let [from, to] of arr){
    graph[from].push(to); 
    graph[to].push(from); 
    }

for(let el of graph){
    el.sort((a,b) => b-a); 
}
let cnt = 1
function dfs(node){
    if(!visited[node]){
        visited[node] = cnt; 
        cnt++; 
       for(const next of graph[node])dfs(next)
    }    
}
dfs(R); 
console.log(visited.slice(1).join('\n'))

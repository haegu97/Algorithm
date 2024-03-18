import sys
sys.setrecursionlimit(10**6)
input = sys.stdin.readline

max = 60

dx = [0,0,1,-1]
dy = [1,-1,0,0]

def dfs(y, x):
  global visited
  visited[y][x] = True
  for i in range(4):
    ny = y + dy[i]
    nx = x + dx[i]
    if graph[ny][nx] and not visited[ny][nx]:
      dfs(ny,nx)



T = int(input())
for _ in range(T):
    m, n, k = map(int, input().split())
    graph = [[False] * max for _ in range(max)]
    visited = [[False] * max for _ in range(max)]

    for _ in range(k):
      x, y = map(int, input().split())
      graph[y+1][x+1] = True

    cnt = 0
    for i in range(1, n+1):
      for j in range(1, m+1):
        if graph[i][j] and not visited[i][j]:
          dfs(i, j)
          cnt += 1
    
    print(cnt)
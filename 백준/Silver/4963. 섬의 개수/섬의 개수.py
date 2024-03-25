from collections import deque
q = deque()

def bfs(x, y):
    q.append((x,y))
    visited[x][y] == True
    while q:
      x, y = q.popleft()
      dx = [0,0,-1,1,-1,1,-1,1]
      dy = [1,-1,0,0,1,1,-1,-1]
      for i in range(8):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < h and 0 <= ny < w and visited[nx][ny] == False and graph[nx][ny] == 1:
          q.append((nx, ny))
          visited[nx][ny] = True

while True:

  w, h = map(int, input().split())
  if w and h != 0:
      graph = [list(map(int,input().split())) for _ in range(h)]
      visited = [[False] * w for _ in range(h)]

      cnt = 0
      for i in range(h):
        for j in range(w):
          if graph[i][j] == 1 and visited[i][j] == False:
            bfs(i, j)
            cnt += 1
  else:
    break
  print(cnt)
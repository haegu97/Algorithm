import sys
input = sys.stdin.readline

from collections  import deque
q = deque()

def bfs():
  while q:
    x, y = q.popleft()
    dx, dy = [-1,1,0,0], [0,0,-1,1]
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      
      if 0 <= nx < column and 0 <= ny < row and visited[nx][ny] == False and graph[nx][ny] == 0:
        visited[nx][ny] = True
        q.append((nx, ny))
        graph[nx][ny] = graph[x][y] + 1


row, column = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(column)]
visited = [[False]*row for _ in range(column)]

for i in range(column):
  for j in range(row):
    if graph[i][j] == 1:
      q.append((i,j))

bfs()

answer = 0

for i in range(column):
  for j in range(row):
    if graph[i][j] == 0:
      print(-1)
      exit()
  answer = max(answer, max(graph[i]))
print(answer-1)
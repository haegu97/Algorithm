import sys
from itertools import combinations

input = sys.stdin.readline

n, m = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(n)]
house = []
chicken = []

for i in range(n):
    for j in range(n):
        if graph[i][j] == 1:
            house.append((i, j))
        elif graph[i][j] == 2:
            chicken.append((i, j))

result = 99999
for chi in combinations(chicken, m):
    temp = 0
    for h in house:
        chi_len = 99999
        for j in range(m):
            chi_len = min((abs(h[0] - chi[j][0])+ abs(h[1] - chi[j][1])), chi_len)
        temp += chi_len
    result = min(result, temp)
print(result)
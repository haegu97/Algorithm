n = int(input())

arr = []

for _ in range(n):
  x, y = map(int, input().split())
  arr.append((x, y))

for student1 in arr:
  rank = 1
  for student2 in arr:
    if student1[0] < student2[0] and student1[1] < student2[1]:
      rank += 1
  
  print(rank, end = " ")
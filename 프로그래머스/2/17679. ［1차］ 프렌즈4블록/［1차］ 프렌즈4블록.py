def solution(m, n, board):
    for i in range(m):
        board[i] = list(board[i])
    answer = 0
    while True:
        visited = [[0 for _ in range(n)] for _ in range(m)]
        cnt = 0
        #4개 쌍 찾기
        for i in range(m-1):
            for j in range(n-1):
                if board[i][j] == board[i+1][j+1] == board[i+1][j] == board[i][j+1] and board[i][j] != "":
                    visited[i][j] = 1
                    visited[i][j+1] = 1
                    visited[i+1][j+1] = 1
                    visited[i+1][j] = 1

        #삭제
        for i in range(m):
            for j in range(n):
                if visited[i][j] == 1:
                    board[i][j] = ""

        #없어지는 칸 개수 세기               
        for i in range(m):
            for j in range(n):
                if visited[i][j] == 1:
                    cnt += 1
        answer += cnt            
        if cnt == 0:
            break

        #한 칸씩 내리기
        move = True
        while move:
            move = False
            for i in range(1, m):
                for j in range(n):
                    if board[i][j] == "" and board[i-1][j] != "":
                        board[i][j] = board[i-1][j]
                        board[i-1][j] = ""
                        move = True
    return answer
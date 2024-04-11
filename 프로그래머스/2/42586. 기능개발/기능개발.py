import math
def solution(progresses, speeds):
    answer = []
    while progresses:
        cnt = 0
        left_day = math.ceil((100 - progresses[0]) /speeds[0])
        for i in range(len(progresses)):
            progresses[i] += speeds[i] * left_day
        
        for i in range(len(progresses)):
            if progresses[0] >= 100:
                cnt += 1
                progresses.pop(0)
                speeds.pop(0)
            else:
                answer.append(cnt)
                break
        if len(progresses) == 0:
            answer.append(cnt)
                
    return answer
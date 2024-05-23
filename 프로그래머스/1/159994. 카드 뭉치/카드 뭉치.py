def solution(cards1, cards2, goal):
    answer = "Yes"
    while goal:
        key = goal.pop(0)
        if cards1 and key == cards1[0]:
            cards1.pop(0)
        elif cards2 and key == cards2[0]:
            cards2.pop(0)
        else:
            answer = "No"
            break
    return answer
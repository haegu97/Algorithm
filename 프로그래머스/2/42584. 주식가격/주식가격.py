def solution(prices):
    answer = []
    for i in range(len(prices)):
        tmp = 0
        for j in range(i+1, len(prices)):
            if prices[i] > prices[j]:
                tmp += 1
                break
            else:
                tmp += 1
        answer.append(tmp)
    return answer
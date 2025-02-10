function solution(sequence, k) {
    let start = 0 
    let end = 0
    let sum = sequence[0] 
    let answer = [-1, -1]
    let minLenth = 1000000

    while (start <= end && end < sequence.length) {
        if (sum === k) { 
            if (end - start < minLenth) { 
                minLenth = end - start
                answer = [start, end]
            }
            sum -= sequence[start]
            start++
        } else if (sum < k) { 
            end++
            if (end < sequence.length) sum += sequence[end]
        } else { 
            sum -= sequence[start]
            start++
        }
    }

    return answer
}

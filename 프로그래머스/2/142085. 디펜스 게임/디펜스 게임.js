function solution(n, k, enemy) {
    let left = 0
    let right = enemy.length
    let answer = 0

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let sorted = enemy.slice(0, mid).sort((a, b) => b - a)
        let tempN = n
        let tempK = k

        for (let i = 0; i < mid; i++) {
            if (tempK > 0) {
                tempK--
            } else {
                tempN -= sorted[i];
                if (tempN < 0) break
            }
        }

        if (tempN >= 0) {
            answer = mid
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return answer
}

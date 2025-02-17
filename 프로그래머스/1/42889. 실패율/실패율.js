function solution(N, stages) {
    let length = stages.length
    let sortArr = []

    for (let i = 1; i <= N; i++) {
        let cnt = 0

        for (let j = 0; j < stages.length; j++) {
            if (stages[j] === i) {
                cnt++
            }
        }

        let tmp = cnt / length
        length -= cnt

        sortArr.push({ stage: i, rate: tmp })
    }

    sortArr.sort((a, b) => {
        if (b.rate === a.rate) {
            return a.stage - b.stage
        }
        return b.rate - a.rate; 
    });

    return sortArr.map(item => item.stage)
}

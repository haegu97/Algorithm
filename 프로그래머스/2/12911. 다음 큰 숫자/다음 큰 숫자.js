function solution(n) {
    const cnt1 = n.toString(2).split('').filter(num => num === '1').length;

    let num = n + 1;
    while (true) {
        const cnt2 = num.toString(2).split('').filter(num => num === '1').length;
        if (cnt1 === cnt2) {
            return num;
        } else {
            num++;
        }
    }
}


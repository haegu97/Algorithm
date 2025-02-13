const gcd = (n1, n2) => {
    let remainder = n1 % n2;
    return n2 === 0 ? n1 : gcd(n2, remainder);
};

const canDivide = (gcdValue, arr) => {
    return arr.every(num => num % gcdValue !== 0);
};

function solution(arrayA, arrayB) {
    let answer = 0;

    let gcdA = arrayA[0];
    for (let i = 1; i < arrayA.length; i++) {
        gcdA = gcd(gcdA, arrayA[i]);
    }

    let gcdB = arrayB[0];
    for (let i = 1; i < arrayB.length; i++) {
        gcdB = gcd(gcdB, arrayB[i]);
    }

    if (canDivide(gcdA, arrayB)) {
        answer = Math.max(answer, gcdA);
    }

    if (canDivide(gcdB, arrayA)) {
        answer = Math.max(answer, gcdB);
    }

    return answer;
}

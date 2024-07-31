function isValid(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === '[' && arr[i + 1] === ']' ||
            arr[i] === '{' && arr[i + 1] === '}' ||
            arr[i] === '(' && arr[i + 1] === ')') {
            arr.splice(i, 2);
            i = 0;  // 첫번째 요소부터 다시 검사
        } else {
            i++;
        }
    }
    return arr.length === 0;
}

function solution(s) {
    const arr = s.split("");
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        const tempArr = arr.slice(i).concat(arr.slice(0, i));  // 문자열 회전
        if (isValid([...tempArr])) {
            count++;
        }
    }

    return count;
}

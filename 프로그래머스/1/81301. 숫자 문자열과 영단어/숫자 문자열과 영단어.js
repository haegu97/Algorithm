function solution(s) {
    const numbers = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
        'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
    };
    let arr = s.split('');
    let tmp = '';
    let answer = '';
    
    for(let str of arr) {
        tmp += str;
        if(Object.keys(numbers).includes(tmp)) {
            answer += numbers[tmp];
            tmp = '';
        };
        if(Number.isInteger(Number(tmp))) {
            answer += tmp;
            tmp = '';
        }
    }
    return Number(answer);
}
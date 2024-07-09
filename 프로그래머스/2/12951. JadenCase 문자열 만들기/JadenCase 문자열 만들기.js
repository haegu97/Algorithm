function solution(s) {
    let words = s.split(" ");
    let result = words.map((word) => {
        if (word.length === 0) {
            return ""; // 공백이 연속으로 있는 경우
        } else {
            return word[0].toUpperCase() + word.slice(1).toLowerCase();
        }
    });
    return result.join(" ");
}

function solution(s) {
    let countZero = 0; // 제거된 0의 개수를 셀 변수
    let transformCount = 0; // 이진 변환 횟수를 셀 변수
    
    let word = s;
    
    while(word !== "1") {
        let zeroCount = 0; // 현재 변환에서 제거된 0의 개수
        let tmpWord = "";
        
        for(let i = 0; i < word.length; i++) {
            if(word[i] === "0") {
                zeroCount++;
            } else {
                tmpWord += "1";
            }
        }
        
        countZero += zeroCount; // 누적된 0의 개수
        transformCount++; // 변환 횟수 증가
        
        word = tmpWord.length.toString(2); // 남은 1의 길이를 이진수로 변환
    }
    
    return [transformCount, countZero];
}

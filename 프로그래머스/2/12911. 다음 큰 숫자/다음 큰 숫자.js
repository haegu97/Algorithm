function solution(n) {
    
    // n을 2진수로 바꿨을 때 1의 갯수.
    const cnt1 = n.toString(2).split('').filter(num => num === '1').length;
    
    // 비교 할 숫자. n 다음 숫자부터 비교 해야 함.
    let num = n + 1;
    
    // num을 1씩 늘려가며 조건에 만족하는 수를 찾는 반복문. 
    while (true) {
        
        // num을 2진수로 바꾸고 1의 갯수.
        const cnt2 = num.toString(2).split('').filter(num => num === '1').length;
        
        // 조건2(n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.)에 만족하면 해당 num return
        if (cnt1 === cnt2) {
            return num;
            
            // 다르면 num에 1 더하고 다시 반복문.
        } else {
            num++;
        }
    }
}


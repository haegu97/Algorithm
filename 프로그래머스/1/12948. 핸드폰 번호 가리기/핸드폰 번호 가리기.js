function solution(phone_number) {
    var answer = '';
    let length = phone_number.length
    for(let i = 0; i < length; i++){
        if(i<length-4){
            answer+= "*"
        }
        else{
            answer+= phone_number[i]
        }
    }
    return answer;
}
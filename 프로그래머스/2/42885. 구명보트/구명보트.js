function solution(people, limit) {
    var answer = 0;
    let start = 0
    let end = people.length - 1
    people.sort((a, b) => a- b)
    while(start <= end){
        answer ++
        if(people[end] + people[start] <= limit){
            start += 1
            end -= 1
        }
        else{
            end -= 1
        }
    }
    return answer;
}
function solution(cacheSize, cities) {
    let arr = []
    let answer = 0
    
    for(let i = 0; i < cities.length; i++){
        let tmpCity = cities[i].toLowerCase()
        
        if(arr.includes(tmpCity)){
            arr = arr.filter((city) => city != tmpCity)
            arr.push(tmpCity)
            answer++
        }
        else{
            arr.push(tmpCity)
            if(arr.length > cacheSize){
                arr.shift()
            }
            answer += 5
        }
    }
    return answer
}
function solution(survey, choices) {
      const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
    
    
    for(let i = 0; i < survey.length; i++){
        
        if(choices[i] < 4){
            types[survey[i][0]] += Math.abs(choices[i] -4)
        }
        else if( choices[i] > 4){
            types[survey[i][1]] += Math.abs(choices[i] - 4)
        }
    }
    
    const type = Object.keys(types)
    let answer = ""
    
    for(let i = 0; i < type.length; i+=2){
        if(types[type[i]] >= types[type[i+1]]){
            answer += type[i]
        }
        else{
            answer += type[i+1]
        }
    }
    return answer
}
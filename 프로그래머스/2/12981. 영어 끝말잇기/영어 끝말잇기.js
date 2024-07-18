function solution(n, words) {
    
    const usedWords = []
    usedWords.push(words[0])
    
    for(let i = 1; i < words.length; i++){
        if(usedWords.includes(words[i])){
            return [(i%n)+1, Math.ceil((i+1) / n)]
        }
        else if(words[i-1][words[i-1].length-1] !== words[i][0]){
            return [(i%n)+1, Math.ceil((i+1) / n)]
        }
        else{
            usedWords.push(words[i])
        }
    }
    return [0, 0]
}
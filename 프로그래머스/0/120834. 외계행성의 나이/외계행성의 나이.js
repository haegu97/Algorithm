function solution(age) {
    const str = 'abcdefghij'
    
    return Array.from(age.toString()).map(v => str[v]).join("")
}
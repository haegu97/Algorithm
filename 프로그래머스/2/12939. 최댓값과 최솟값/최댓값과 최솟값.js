function solution(s) {
    let tmp = ""    
    tmp += Math.min(...s.split(" ")) + " " + Math.max(...s.split(" "))
    return tmp
}
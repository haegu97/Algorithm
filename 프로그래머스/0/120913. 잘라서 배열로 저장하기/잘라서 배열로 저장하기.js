function solution(my_str, n) {
    const strArr = my_str.split("")
    const arr = []
    
    while(strArr.length > 0){
        arr.push(strArr.splice(0,n).join(""))
    }
    
    return arr
}
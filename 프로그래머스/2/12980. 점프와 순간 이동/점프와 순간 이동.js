function solution(n)
{
    let cnt = 0
    let num = n
    while(num != 0){
        if(num % 2 == 0){
            num = num / 2
        }
        else{
            num -= 1
            cnt++
        }
    }
    return cnt
    
}
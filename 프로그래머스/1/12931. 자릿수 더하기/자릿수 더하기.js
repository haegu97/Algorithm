function solution(n)
{
    const strNum = n.toString()
    let sum = 0
    for(let i = 0; i < strNum.length; i++){
        sum += Number(strNum[i])
    }
    return sum
}
function solution(numbers) {
    const numArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let answer = ""
    
    numArr.forEach((num, index) => {
        numbers = numbers.split(num).join(index)
    })
    return Number(numbers)   
}
function solution(sizes) {
    var answer = 0;
    const arr1 = []
    const arr2 = []
    for(let i = 0; i < sizes.length; i++){
        sizes[i].sort((a,b)=>b-a)
        arr1.push(sizes[i][0])
        arr2.push(sizes[i][1])
    }
    arr1.sort((a,b)=>b-a)
    arr2.sort((a,b)=>b-a)
    return arr1[0] * arr2[0]
}
function getParent(parentArr, point){
  if(parentArr[point] === point){
    return point
  }else{
    return(parentArr[point] = getParent(parentArr, parentArr[point]))
  }
}

function setParent(parentArr, a, b){
  const parentA = getParent(parentArr, a)
  const parentB = getParent(parentArr, b)

  if(parentA < parentB){
    return(parentArr[parentB] = parentA)
  }else{
    return(parentArr[parentA] = parentB)
  }
}

function solution(n, costs){
  let answer = 0
  let parentArr = Array(n).fill().map((obj, index) => index)

  costs.sort((a, b) => {
    if(a[2] === b[2]){
      return a[0] - b[0]
    }else{
      return a[2] - b[2]
    }
  })

  for(const cost of costs){
    if(getParent(parentArr, cost[0]) !== getParent(parentArr, cost[1])){
      answer += cost[2]
      setParent(parentArr, cost[0], cost[1])
    }
  }
  return answer
}
function solution(topping){
  let answer = 0
  let set = new Set()
  let compareSet = new Set()
  let count = new Array(10001).fill(0)

  if(topping.length === 1){
    return 0
  }
  topping.map(v => {
    set.add(v)
    count[v]++
  })
  topping.map(v => {
    if(count[v] > 0){
      compareSet.add(v)
      count[v]--
    }
    if(count[v] === 0){
      set.delete(v)
    }
    compareSet.add(v)
    if(set.size === compareSet.size){
      answer++
    }
  })
  return answer
}
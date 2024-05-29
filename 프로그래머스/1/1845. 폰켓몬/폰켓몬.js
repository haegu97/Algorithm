function solution(nums) {
  const arr = [];
  const max = nums.length / 2;
  for (let i = 0; i < nums.length; i++) {
    if (arr.length < max) {
      if (!arr.includes(nums[i])) {
        arr.push(nums[i]);
      }
    }
  }
  return arr.length;
}
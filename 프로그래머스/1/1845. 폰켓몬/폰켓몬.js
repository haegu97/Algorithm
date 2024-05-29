function solution(nums) {
    let myBag = [...new Set(nums)];
    let limit = nums.length / 2;
    console.log(myBag)
    
    return myBag.length > limit ? limit : myBag.length;
}
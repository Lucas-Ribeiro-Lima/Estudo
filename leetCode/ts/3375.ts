function minOperations(nums: number[], k: number): number {  
  nums.sort((a, b) => a - b)  
  const sNums = Array.from(new Set(nums).values())

  if(nums[0] < k) return -1

  return sNums[0] === k ? sNums.length - 1 : sNums.length
};
// nums [ 10, 8, 10, 8 ]
// h is valid if nums[i] > h 10

const nums = [ 5, 2, 5, 4, 5 ], k = 2

console.log(minOperations(nums, k))
// k = 2
//        op = 0    [ 5, 2, 5, 4, 5 ]
// h = 4  op++ = 1  [ 4, 2, 4, 4, 4 ]
// h = 2  op++ = 2  [ 2, 2, 2, 2, 2 ]
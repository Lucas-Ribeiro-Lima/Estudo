/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let zero = 0, one = 0
  for(let num of nums) {
    if(num === 0) zero++
    if(num === 1) one++
  }

  for(let i = 0; i < nums.length; i++) {
    if(zero) {
      nums[i] = 0
      continue
    }
    if(one) {
      nums[i] = 1
      continue
    }
    nums[i] = 2
  }
};

const nums = [2,0,2,1,1,0]

sortColors(nums)

console.log(nums)
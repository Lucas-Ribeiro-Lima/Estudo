function removeElement(nums: number[], val: number): number {
  let i = 0

  while(i < nums.length) {
    if(nums[i] === val ) {
      nums.splice(i, 1)
      continue
    }
    i++
  }

  return nums.length
};

const nums = [0,1,2,2,3,0,4,2]
const val = 2

console.log(removeElement(nums, val))
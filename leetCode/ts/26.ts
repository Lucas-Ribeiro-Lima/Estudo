function removeDuplicates(nums: number[]): number {
  let i = 1

  while(i < nums.length) {
    if(nums[i] === nums[i -1]){
      nums.splice(i, 1)
      continue
    }
    i++
  }

  return nums.length
};

const nums = [1,1,2]

console.log(removeDuplicates(nums))
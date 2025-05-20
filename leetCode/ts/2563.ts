function countFairPairs(nums: number[], lower: number, upper: number): number {
  nums.sort((a, b) => a - b)
  const min = nums[0]
  const max = nums[nums.length - 1]

  for(let i = 0, j = nums.length - 1; i < nums.length; i++,j--) {
  }


  }

  return pairs
}

const nums = [0,1,7,4,4,5], lower = 3, upper = 6

console.log(countFairPairs(nums, lower, upper))
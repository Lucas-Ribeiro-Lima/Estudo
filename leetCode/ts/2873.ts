function maximumTripletValue(nums: number[]): number {
  if(nums.length === 3) {
    const ans = (nums[0] - nums[1]) * nums[2]
    return ans < 0 ? 0 : ans
  }

  let output = Number.MIN_VALUE
  for(let i = 0; i < nums.length - 2; i++) {
    for(let j = i + 1; j < nums.length - 1; j++) {
      for(let k = j + 1; k < nums.length; k++) {
        output = Math.max((nums[i] - nums[j]) * nums[k], output)
      }
    }
  }

  return output < 0 ? 0 : output
};

const nums = [12,6,1,2,7]

console.log(maximumTripletValue(nums))
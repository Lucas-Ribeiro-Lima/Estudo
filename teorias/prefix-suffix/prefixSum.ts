const arr = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function preffixSum(nums: number[], start: number, end: number) {
  const prefix: number[] = [ nums[0] ]

  for(let i = 1; i < nums.length; i++) {
    prefix[i] = nums[i] + prefix[i - 1]
  }

  return  start === 0 ? prefix[end] : prefix[end] - prefix[start - 1]
}
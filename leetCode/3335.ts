function isZeroArray(nums: number[], queries: number[][]): boolean {
  for(let [ start, end ] of queries) {
    for(let i = start; i <= end; i++) {
      nums[i] = Math.max(nums[i] - 1, 0)
    }
  }

  return nums.reduce((prev, acc) => prev + acc, 0) === 0
}
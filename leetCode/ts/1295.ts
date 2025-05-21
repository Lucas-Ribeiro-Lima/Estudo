function findNumbers(nums: number[]): number {
  return nums.filter((val) => {
    return String(val).length % 2 === 0
  }).length
};
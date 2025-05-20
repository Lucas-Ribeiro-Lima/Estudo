function twoSum(nums: number[], target: number, ): number[] {
  const complementMap: Record<number, number> = {}
  for(let idx = 0; idx < nums.length; idx++) {
    const complement = target - nums[idx]
    if(complementMap.hasOwnProperty(complement)) return [ complementMap[complement], idx ]
    complementMap[nums[idx]] = idx
  }

  return []
};
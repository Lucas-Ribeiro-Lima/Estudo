class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
      cMap = {}

      for idx, num in enumerate(nums):
        if (target - num) in cMap:
          return [ idx, cMap[target - num]]
        cMap[num] = idx
  
      return []
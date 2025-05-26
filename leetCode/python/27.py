class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        for idx, num in enumerate(nums):
          if(num == val):
            nums.slice(idx, idx+1)
        return len(nums)
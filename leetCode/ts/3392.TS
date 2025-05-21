function countSubarrays(nums: number[]): number {
    return nums.filter((_, idx) => {
      return nums[idx] + nums[idx + 2] === nums[idx + 1] / 2
    }).length
};

const nums = [1,2,1,4,1]

console.log(countSubarrays(nums))
function searchInsert(nums: number[], target: number): number {
  return lookup(nums, target, 0, nums.length)
};

function lookup(nums: number[], target: number, s: number, e: number) {
  if(s >= e) return s
  let idx = Math.floor((e + s)/2)
  
  if (nums[idx] === target) return idx;
  if(target < nums[idx]) return lookup(nums, target, s, idx)
    else return lookup(nums, target, idx + 1, e)
}

const nums1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20 ]
const nums = [1,3,5,6], target = 15

console.log(searchInsert(nums1, target))
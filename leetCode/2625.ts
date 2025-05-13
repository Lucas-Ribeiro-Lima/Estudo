type MultiDimensionalArray = (number | MultiDimensionalArray)[];

const flat = (arr: MultiDimensionalArray,  n: number): MultiDimensionalArray => {
  const stack: { val: number | MultiDimensionalArray, depth: number }[] = []
  const ans: MultiDimensionalArray = [];

  for(let i = arr.length - 1; i >= 0; i--) {
    stack.push({ val: arr[i], depth: n })
  }

  while(stack.length > 0) {
    const { val, depth } = stack.pop()!
    if(!Array.isArray(val) || depth === 0) {
      ans.push(val)
      continue
    }

    for(let i = val.length - 1; i >= 0; i--) {
      stack.push({ val: val[i], depth: depth - 1 })
    }
  }

  return ans
};

const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
n = 0

console.log(flat(arr, n))
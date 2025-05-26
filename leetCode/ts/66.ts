function plusOne(digits: number[]): number[] {
  for(let i = digits.length - 1; i >= -1; i--) {
    if(i === -1) {
      digits.unshift(1)
      break
    }
    if(digits[i] + 1 === 10) {
      digits[i] = 0
      continue
    }
    digits[i]++
    break
  }
  return digits
};

const digits = [9]

console.log(plusOne(digits))
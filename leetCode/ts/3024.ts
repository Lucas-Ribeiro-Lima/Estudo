const triangleTypes = {
  1: "equilateral",
  2: "isosceles",
  3: "scalene"
}

function triangleType(nums: number[]): string {
  const set = new Set(nums)

  if(!isValidTriangle(nums)) return "none"
  return triangleTypes[set.size]
};

function isValidTriangle([a, b, c]: number[]): boolean {
  return a + b > c && b + c > a && c + a > b
}

const nums = [5,3,8]

console.log(triangleType(nums))
function mySqrt(x: number): number {
  if (x < 2) return x;

  let left = 1;
  let right = x;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const square = mid * mid;

    if (square === x) return mid;
    if (square < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return right; // arredondado para baixo
}

const x = 8

console.log(mySqrt(x))
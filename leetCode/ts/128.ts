function convertToTitle(columnNumber: number): string {
  let res = ""
  while (columnNumber > 0) {
    let unit = --columnNumber % 26
    res = String.fromCharCode(65 + unit) + res
    columnNumber = Math.floor(columnNumber / 26)
  }
  return res
}

const n = 2147483647

console.log(convertToTitle(n))
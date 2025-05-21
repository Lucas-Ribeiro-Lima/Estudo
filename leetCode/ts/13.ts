function romanToInt(s: string, output = 0): number {
  let prev
  for(let i = s.length - 1; i >= 0; i--) {
    let actual = valMap[s[i]]
    if(actual < prev) actual *= -1
    output += actual
    prev = actual
  }

  return output
};

const valMap = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}
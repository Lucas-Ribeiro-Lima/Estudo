function addBinary(a: string, b: string): string {
  let res = ""

  let incomingBit = 0
  for(let i = a.length - 1, j = b.length - 1; i >= 0 || j >= 0; i--, j--) {
    let evaluation = (+a[i] || 0) + (+b[j] || 0) + incomingBit
    incomingBit = evaluation > 1 ? 1 : 0
    res = evaluation % 2 + res
  }

  if(incomingBit) res = incomingBit + res
  return res
};


console.log(addBinary("11", "1"))
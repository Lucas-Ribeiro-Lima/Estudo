function isPalindrome(s: string): boolean {
    return s.replace(/[\W_]/g, "")
      .toLowerCase() === s
      .replace(/[\W_]/g, "")
      .toLowerCase()
      .split("")
      .reverse()
      .join("")
};

function isPalindromeTwoPointer(s: string): boolean {
  return ((s2 = s.replace(/[\W_]/g, "").toLowerCase()) => {
    const middle = Math.floor(s2.length/2)
  
    let i = 0
    let j = s2.length - 1
  
    while(i < middle) {
      if(s2[i] !== s2[j]) return false
      i++
      j--
    }
  
    return true
  })()
}

const s = "A man, a plan, a canal: Panama"

console.log(isPalindromeTwoPointer(s))
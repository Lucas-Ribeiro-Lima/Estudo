// function isPalindrome(x: number): boolean {
//   const s = String(x)
//   const half = [...s.slice(0, ((s.length - (s.length % 2)) / 2))].reverse().join("")
//   const full = s.slice(((s.length + (s.length % 2)) / 2 ), s.length)
//   return  half === full
// };

function isPalindrome(x: number): boolean {
  const s = String(x)
  let start = 0
  let end = s.length - 1

  while(start < end) {
    if(s[start] !== s[end]) return false
    start++
    end--
  }

  return true
}

function isPalindromeNinja(x: number): boolean {
  return ((s = String(x)) => 
      s
        .slice(0, ((s.length - (s.length % 2)) / 2))
        .split("")
        .reverse()
        .join("") === 
      s
        .slice(((s.length + (s.length % 2)) / 2), s.length))()
};



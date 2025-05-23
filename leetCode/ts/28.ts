function strStr(haystack: string, needle: string): number {
  for(let i = 0; i <= haystack.length - needle.length; i++) {
    if(haystack.slice(i, needle.length + i) === needle) return i
  }

  return -1
};

const haystack = "butsad"
const needle = "sad"

console.log(strStr(haystack, needle))
function longestCommonPrefix(strs: string[]): string {
  if(!strs.length) return ""

  strs.sort((a, b) => a.length - b.length)
  let prefix = strs[0]
  for(let i = 1; i < strs.length; i++) {
    while(true) {
      if(strs[i].startsWith(prefix)) break
      if(!prefix.length) break
      prefix = prefix.slice(0, -1)
    }
  }

  return prefix
};

const strs = ["flower","flow","flight"]

console.log(longestCommonPrefix(strs))
function getWordsInLongestSubsequence(words: string[], groups: number[]): string[] {
  const ans: Set<string> = new Set()
  
  if(groups.length === 1) return [ words[0] ]

  for(let i = 0; i < groups.length - 1; i++) {
    if(groups[i] === groups[i + 1]) continue
    if(isHammingDistanceValid(words[i], words[i + 1])) {
      ans.add(words[i])
      ans.add(words[i + 1])
      i++
  }
  }

  if(ans.size === 0) return [ words[words.length - 1] ]
  return [ ...ans.values() ]
};

function isHammingDistanceValid(w1: string, w2: string) {
  if(w1.length !== w2.length) return false

  let cnt = 0
  for(let i = 0; i < w1.length; i++)  {
    if(w1[i] !== w2[i]) cnt++
    if (cnt > 1) return false
  }
  return cnt === 1
}

const words = ["bab","dab","cab"], groups = [1,2,2]

console.log(getWordsInLongestSubsequence(words, groups))
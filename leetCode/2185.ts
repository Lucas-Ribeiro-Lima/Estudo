function prefixCount(words: string[], pref: string): number {
  let cnt = 0
  const re = RegExp(`^${pref}`)
  for(let word of words) {
    if(word.match(re)) cnt++
  }

  return cnt
};
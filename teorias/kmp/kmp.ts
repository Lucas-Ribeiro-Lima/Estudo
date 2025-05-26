function computeLps(pattern: string): number[] {
  const lps = Array(pattern.length).fill(0)

  let length = 0
  let i = 1
  while(i < pattern.length) {
    if(pattern[i] === pattern[length]) {
      lps[i] = ++length
      i++
      continue
    } 

    if(length > 0) {
      length = lps[length - 1]
      continue
    }

    lps[i] = 0, i++
  }

  return lps
}

function kmp(word: string, pattern: string) {
  const lps = computeLps(pattern)
  const match: number[] = []
  let i = 0, j = 0

  while (i < word.length) {
    if (word[i] === pattern[j]) {
      i++
      j++

      if (j === pattern.length) {
        match.push(i - j)
        j = lps[j - 1]
      }

      continue // próxima iteração do loop
    }

    if (j > 0) {
      j = lps[j - 1]
      continue
    }

    i++
  }

  return match
}

const word = "ababcadababcad", pattern = "ababc"

console.log(kmp(word, pattern))
function findWordsContaining(words: string[], x: string): number[] {
    return words.map((val, idx) => val.includes(x) ? idx : -1).filter((val) => val !== -1)
};

const findWordsContainingReduce = (words: string[], x: string): number[] => {
  return words.reduce<number[]>((res, word, idx) => word.includes(x) ? [ ...res, idx ] : res, [])
}

const findWordsContainingFlatMap = (words: string[], x: string): number[] => {
  return words.flatMap((word, idx) => word.includes(x) ? [idx]: [])
}

const words = ["abc","bcd","aaaa","cbc"], x = "a"

console.log(findWordsContaining(words, x))
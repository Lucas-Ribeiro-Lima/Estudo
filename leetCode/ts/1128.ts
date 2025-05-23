function numEquivDominoPairs(dominoes: number[][]): number {
  const map: number[] = Array(100).fill(0)
  let result = 0

  for(let [ a, b ] of dominoes) {

    let min = Math.min(a, b)
    let max = Math.max(a, b)

    let key = String(min) + String(max)

    result += map[key]++
  }

  return result
};

//Faster
function numEquivDominoPairsFaster(dominoes: number[][]): number {
  // Since each side is 1–9, the combined key (min*10 + max) ranges from 11 to 99.
const countByKey = new Uint16Array(100);
let totalEquivalentPairs = 0;

for (let i = 0; i < dominoes.length; i++) {
  const firstValue = dominoes[i][0];
  const secondValue = dominoes[i][1];

  // Determine ordered pair (minValue, maxValue)
  const minValue = Math.min(firstValue, secondValue)
  const maxValue = Math.max(firstValue, secondValue)

  // Integer key in [11..99]
  const key = minValue * 10 + maxValue;

  // Every time we see this key, all previous occurrences form new equivalent pairs
  totalEquivalentPairs += countByKey[key];

  // Record this occurrence for future pairs
  countByKey[key]++;
}

return totalEquivalentPairs;
};


const dominoes = [[1,2],[1,2],[1,1],[1,2],[2,2]]

console.log(numEquivDominoPairs(dominoes))
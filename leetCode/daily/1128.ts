function numEquivDominoPairs(dominoes: number[][]): number {
    const m: Record<number, number> = {}
    let res = 0

    for(let i = 0; i < dominoes.length; i++) {
        let minor, major
        minor = dominoes[i][0] < dominoes[i][1] ? dominoes[i][0] : dominoes[i][1]
        major = dominoes[i][1] > dominoes[i][0] ? dominoes[i][1] : dominoes[i][0]
        const key = (minor * 10) + major
        if(m[key] !== undefined) {
          res += ++m[key]
          continue
        }
        m[key] = 0
    }

    return res
}

const dominoes = [[1,2],[2,1],[3,4],[5,6]]

console.log(numEquivDominoPairs(dominoes))
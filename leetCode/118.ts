function generate(numRows: number): number[][] {
  const dp: number[][] = Array.from({ length: numRows }, (_, i) => {
    return Array(i + 1).fill(1)
  })

  for(let i = 2; i < numRows; i++) {
    for(let j = 1; j < dp[i].length - 1; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }
  }

  return dp
};

console.log(generate(5))
function getRow(rowIndex: number): number[] {
  const numRows = rowIndex + 1
  const dp: number[][] = Array.from({ length: numRows }, (_, i) => {
    return Array(i + 1).fill(1)
  })

  for(let i = 2; i < numRows; i++) {
    for(let j = 1; j < dp[i].length - 1; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
    }
  }

  return dp[rowIndex]
};

function getRowTopDown(rowIndex: number): number[] {
  const dp = Array(rowIndex + 1).fill(1)
  if(rowIndex + 1 < 3) return dp

  const prevRow = getRowTopDown(rowIndex - 1)
  for(let i = 1; i < rowIndex; i++) {
    dp[i] = prevRow[i - 1] + prevRow[i]
  }

  return dp
};

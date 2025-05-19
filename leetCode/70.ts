function climbStairs(n: number): number {
  //Memoização dos calculos anteriores
  const dp: number[] = [1, 2]

  for(let i = 2; i < n; i++) {
    //Cada iteração é a soma dos dois calculos anteriores
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  //Retorna a n-esíma iteração em um array 0-indexed
  return dp[n - 1]
};
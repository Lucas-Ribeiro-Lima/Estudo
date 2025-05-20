//Soma dos seus últimos dois termos
// 0 1 1 2 3 5 8 13 21 34 55
// Solução DP, memoizar resultados pre-calculados
function fib(n: number) {
  const dp: number[] = []
  return fibDp(n, dp)
}

function fibDp(n: number, dp: number[]) {
  if(n === 0 || n === 1)
    return n
  if(!dp[n]) // Se o resultado não existe, então o calculamos.
    dp[n] = fibDp(n - 1, dp) + fibDp(n - 2, dp)
  return dp[n] // Se já temos o mesmo calculado, só retornamos.
}

console.log(fib(10))
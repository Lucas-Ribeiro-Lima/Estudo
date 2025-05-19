// moedas = [1, 5, 10] troco = 50

const moedas = [ 4, 7 ]
/**
*   Troco 25
*   Moedas 4                                            Moeda 7   
* 
*   No final da recursão, são 3 moedas de 7 e uma moeda de 4 para trocar 25.
*   25 de 4 reais = 1 + Math.min(Infinity, 21 de 7) = 4 moedas.            
*             Nessa iteração o Math.min() vai retornar o resultado da moeda 7 pois é menor.
*   21 de 4  = 1 + Math.min(17 de 4, 17 de 7) Infinity    troco 21 de 7 = 1 + 14 = 3   São necessárias 3 moedas
*   17 de 4  = 1 + Math.min(13 de 4, 13 de 7) Infinity    troco 14 de 7 = 1 + 7  = 2   de 7 para trocar 21
*   13 de 4  = 1 + Math.min(9  de 4, 9 de 7)  Infinity    troco 7 de 7 = 1 + 0   = 1
*   9 de 4   = 1 + Math.min(5  de 4, 5 de 7)  Infinity    troco 0 de 7 = 0
*   5 de 4  = 1 +  Math.min(1  de 4, 1 de 7)  Infinity     
*                                                                   
*   A comparação do 7 será Math.min(7, Infinity) pois não existe outra moeda fornecida.
* 
*           1 de 4 = Infinity                1 de 7 = Infinity
* 
*   1 de 4  = Math.min(Infinity, Infinity) - Não é possivel trocar 1 real com moeda de 4 reais nem com 7.
*/

const troco = 50

function minCoinsToExchange(coins: number[], val: number): number {
  const dp: number[][] = Array.from({ length: coins.length }, () => {
    return Array(val + 1).fill(-1);
  });

  function dfs(idx: number, val: number): number {
    if (val === 0) return 0; // Caso base: troco completo
    if( idx >= coins.length) return Infinity
    if (val < 0) return Infinity
  
    // troco 25 de 1 real = trocar 1 + 24 reais de 1 real
    // ou troco 25 de 5 reais = trocar 1 + 20 reais de 5 reais...  1 + caso anterior 4 = 5
    // +  troco 20 de 5 reais = trocar 1 + 15 reais de 5 reais...  1 + caso anterior 3 = 4
    // +  troco 15 de 5 reais = trocar 1 + 10 reais de 5 reais...  1 + caso anterior 2 = 3
    // +  troco 10 de 5 reais = trocar 1 + 5 reais de 5 reais ...  1 + caso anterior 1 = 2
    // +  troco 5 de  5 reais = trocar 1 + 0 reais de 5 reais ...  1 + caso anterior 0 = 1
    // +  troco 0 de  5 reais = 0
    if (dp[idx][val] === -1) {
      dp[idx][val] = Math.min(
        1 + dfs(idx, val - coins[idx]), 
        dfs(idx + 1, val))
    }
  
    return dp[idx][val];
  }

  const result = dfs(0, val);

  return result === Infinity ? -1 : result;
}

console.log(minCoinsToExchange(moedas, 100))
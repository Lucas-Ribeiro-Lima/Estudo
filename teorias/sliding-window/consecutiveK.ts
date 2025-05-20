const nums = [ 7, 1, 2, 5, 0, 2, 3, 4, 8, 2 ]
const k = 3
  
/**
 * Sliding Window Algorithm
 * 
 * Reduz a complexidade de O(n * k) para O(n) ao reutilizar a soma da janela anterior,
 * removendo o elemento que saiu da janela e adicionando o novo elemento que entrou.
 * 
 * Útil para problemas com subarrays ou substrings contínuas de tamanho fixo ou variável.
 */
function consecutiveMaxK(nums: number[], k: number) {
  let sum = 0

  //Primeira seção da janela de 0 até k
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  let max = sum

  //Iteração restante da janela de k até nums.length.
  for (let i = k; i < nums.length; i++) {
    sum += nums[i] - nums[i - k] //Adiciona o novo elemento e remove o primeiro da contagem.
    max = Math.max(sum, max) //Verifica se a nova soma e maior que a da janela anterior.
  }

  return max
}

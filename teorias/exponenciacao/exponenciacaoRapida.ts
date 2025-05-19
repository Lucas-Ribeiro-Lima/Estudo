//Reduz operações matematicas de exponenciação em log n
function exponenciacaoRapida(val: number, n: number): number {
  if(n === 0) return 1
  if(n === 1) return val

  //Divide a exponenciacao por 2 e ignora impares, lidando com os mesmos no final
  const metade = exponenciacaoRapida(val, Math.floor(n/2))
  const completo = metade * metade

  //Se o expoente é impar lidamos com ele agora, exponenciando mais uma vez o valor
  return n % 2 === 0 ? completo : val * completo
}

//Muito rápida, mas só funciona para potências de 2
function exponenciacaoLeftShift(val:number, n:number) {
  //Verifica se o número é potência de 2
  if( (val & val - 1) !== 0) throw new Error("Numero não é potência de 2")

  let k = 0
  //Precisamos descobrir a potencia que eleva 2 a val
  while((1 << k) < val) k++

  return 1 << (k*n)
}

const multiply = (a, b) =>  a * b

console.log(exponenciacaoRapida(15, 0))
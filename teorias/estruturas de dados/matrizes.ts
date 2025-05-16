type Matrix = number[][]
type Vector = number[]

function identityMatrix(A: Matrix): Matrix {
  const aL = A.length
  const aC = A[0].length

  const B = Array.from({ length: aL }, () =>  Array(aC).fill(0))

  for(let i = 0; i < aL; i++) {
    for(let j = 0; j < aC; j++) {
      if(i === j) B[i][j] = 1
    }
  }


  return B
}

function multiplyMatrix(A: Matrix, B: Matrix): Matrix {
  const aL = A.length
  const aC = A[0].length
  const bL = B.length
  const bC = B[0].length

  // Colunas A === Linhas B
  if(aC !== bL) throw new Error("Multiplicação impossível")

  // Matriz de saída de ordem = Linhas A x Colunas B
  const C = Array.from({ length: aL }, () => Array(bC).fill(0))
  
  for(let l = 0; l < aL; l++) {
    for(let c = 0; c < bC; c++) {
      //O iterador pode ser ate aC ou bL, pois são iguais.
      //Está é a condição matemática para a multiplicação existir.
      for(let i = 0; i < aC; i++) {
        //Preencher a matriz resultante com as operações, A define a linha, B a coluna
        C[l][c] += A[l][i] * B[i][c]
      }
    }
  }

  return C
}

const A = [
  [1, 2],
  [3, 4]
],
B = [
  [4, 3],
  [2, 1]
]

const C = multiplyMatrix(A, B)
const I = identityMatrix(A)
console.log(I)
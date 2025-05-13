export function insertionSort<T>(arr: T[]) {
  for(let rightPointer = 1; rightPointer < arr.length; rightPointer++) {
    const insertNumber = arr[rightPointer]
    let leftPointer = rightPointer - 1 // Imediatamente anterior ao ponteiro da direita
    while(leftPointer >= 0 && arr[leftPointer] > insertNumber) { //Enquanto ainda exister array e o numero anterior for maior
      arr[leftPointer + 1] = arr[leftPointer] // Passa o número anterior para a posição da frente
      leftPointer-- //Reduz, voltando a comparação do numero anterior a key, para verificar se está e a posição correta do valor
    }
    let correctPosition = leftPointer + 1 //Posição a frente do numero comparado que falhou
    arr[correctPosition] = insertNumber
  }
}

const arr = [ 3, 4, 1, 2, 7 ]

insertionSort(arr)

console.log(arr)
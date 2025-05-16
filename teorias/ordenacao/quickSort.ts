type OrderT = "desc" | "asc"


export function quickSort<T>(arr: T[], left: number, right: number, order?: OrderT) {
  if(left < right) {
    const pivo = partition<T>(arr, left, right, order)
    quickSort(arr, left, pivo - 1, order)
    quickSort(arr, pivo + 1, right, order)
  }
}


function partition<T>(arr: T[], left: number, right: number, order?: OrderT) {
  let i = left
  for(let j = left; j < right; j++) {
    const shouldSwap = order === "desc"
      ? arr[j] >= arr[right]
      : arr[j] <= arr[right]

    if (shouldSwap) {
      [ arr[i], arr[j] ] = [ arr[j], arr[i] ]
      i++
    }
  }
  [ arr[i], arr[right] ] = [ arr[right], arr[i] ]
  return i
}


const arr = [ 3, 4, 1, 7, 2 ]
console.log("Array original: " + arr)

quickSort<number>(arr, 0, arr.length - 1, "desc")

console.log("Array ordenado: " + arr)
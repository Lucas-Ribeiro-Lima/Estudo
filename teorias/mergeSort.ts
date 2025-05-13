export function mergeSort<T>(array: T[]) {
  if (array.length > 1) {
    const middle = Math.floor(array.length / 2)
    const [ left, right ] = [ array.slice(0, middle), array.slice(middle)]
    const arrLeft = mergeSort(left)
    const arrRight = mergeSort(right)
  
    let i = 0
    let j = 0
    const result: T[] = []
    while(i < arrLeft.length || j < arrRight.length) {
      if(arrLeft[i] < arrRight[j]) {
        result.push(arrLeft[i])
        i++
      } else {
        result.push(arrRight[j])
        j++
      }
    }
  
    return [...result, ...arrLeft.slice(i), ...arrRight.slice(j)]
  }
  return array
}



const arr = [3, 4, 1, 2, 7]

const orderedArr = mergeSort(arr)

console.log(orderedArr)
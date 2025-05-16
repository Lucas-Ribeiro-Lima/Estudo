import { Heap, MinHeap } from '../estruturas de dados/heap'

const wantToOrdenate = [7, 4, 3, 9, 11, 1, 2, 18]


function heapSort<T>(arr: T[], heap: Heap<T>) {
  const res: T[] = []
  for(let value of arr) {
    heap.insert(value, value as number)
  }
  while(!heap.isEmpty()) {
    res.push(heap.extractPeek())
  }
  return res
}

const minHeap = new MinHeap()
const ordenatedArray = heapSort(wantToOrdenate, minHeap)

console.log(ordenatedArray)

export type HeapNode<T> = {
  weight: number
  val: T
}

export interface Heap<T> {
  isEmpty: () => boolean
  peek: () => HeapNode<T>
  extractPeek: () => T
  insert: (val: T, weight: number) => void
  getParentIdx: (idx: number) => number
  getLeftChildIdx: (idx: number) => number
  getRightChildIdx: (idx: number) => number
  heapifyDown: () => void
  heapifyUp: () => void
}


export class MinHeap<T> implements Heap<T> {
  private _heap: HeapNode<T>[] = []
  constructor() {}

  isEmpty() {
    return this._heap.length === 0
  }
  
  peek() {
    return this._heap[0]
  }

  extractPeek() {
    const val = this._heap[0].val
    const lastVal = this._heap.pop()
    if(this.isEmpty()) return val

    this._heap[0] = lastVal!

    this.heapifyDown()

    return val
  }

  insert(val: T, weight: number) {
    this._heap.push({
      weight,
      val
    })
    this.heapifyUp()
  }

  getParentIdx(idx: number) {
    return Math.floor((idx - 1)/2)
  }

  getLeftChildIdx(parentIdx: number) {
    return parentIdx*2 + 1
  }

  getRightChildIdx(parentIdx: number) {
    return parentIdx*2 + 2
  }

  heapifyDown() {
    let idx = 0
    while(idx < this._heap.length) {
      let smallerChildIdx = this.getLeftChildIdx(idx)
      let rightChildIdx = this.getRightChildIdx(idx)

      if(smallerChildIdx > this._heap.length - 1) break

      if(this._heap[rightChildIdx]?.weight < this._heap[smallerChildIdx]?.weight) smallerChildIdx = rightChildIdx

      if(this._heap[idx]?.weight < this._heap[smallerChildIdx]?.weight) break

      [ this._heap[idx], this._heap[smallerChildIdx] ] = [ this._heap[smallerChildIdx], this._heap[idx] ]
      idx = smallerChildIdx
    }
  }
  
  heapifyUp() {
    let idx = this._heap.length - 1
    let parentIdx = this.getParentIdx(idx)

    while(idx >= 0 && this._heap[idx]?.weight < this._heap[parentIdx]?.weight) {
      [ this._heap[idx], this._heap[parentIdx] ] = [ this._heap[parentIdx], this._heap[idx] ]
      idx = parentIdx
      parentIdx = this.getParentIdx(idx)
    }
  }
}
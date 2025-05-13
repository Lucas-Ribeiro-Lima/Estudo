type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
    const result: Map<number, ArrayType> = new Map()

    for(let arr of [arr1, arr2]) {
      for(let obj of arr) {
        const existing = result.get(obj.id)

        if(!existing) {
          result.set(obj.id, obj)
          continue
        }

        for(let key in obj) {
          existing[key] = obj[key]
        }
      }
    }

    return heapSort(result)
};

function heapSort(map: Map<number, ArrayType>) {
  const minHeap = new MinHeap()
  const values = map.values()
  const result: ArrayType[] = []

  for(let val of values) {
    minHeap.insert(val)
  }

  while(!minHeap.isEmpty()) {
    result.push(minHeap.extract())
  }

  return result
}

class MinHeap {
  private _heap: ArrayType[] = []
  constructor() {}

  isEmpty() {
    return this._heap.length === 0
  }

  insert(val: ArrayType) {
    this._heap.push(val)
    this.heapifyUp()
  }

  extract() {
    const val = this._heap[0]
    const lastVal = this._heap.pop()
    if(this.isEmpty()) return val

    this._heap[0] = lastVal!
    this.heapifyDown() 
    return val
  }

  heapifyUp() {
    let childIdx = this._heap.length - 1
    while(childIdx >= 0) {
      let parentIdx = this.getParentIdx(childIdx)

      if(parentIdx < 0) break
      if(this._heap[childIdx].id > this._heap[parentIdx].id) break

      [ this._heap[childIdx], this._heap[parentIdx] ] = [ this._heap[parentIdx], this._heap[childIdx] ]
      childIdx = parentIdx
    }
  }

  heapifyDown() {
    let idx = 0
    while(idx < this._heap.length) {
      let smallerChildIdx = this.getLeftChildIdx(idx)
      let rightChildIdx = this.getRightChildIdx(idx)

      if(smallerChildIdx > this._heap.length - 1) break

      if(this._heap[smallerChildIdx].id > this._heap[rightChildIdx]?.id ) smallerChildIdx = rightChildIdx

      if(this._heap[idx].id < this._heap[smallerChildIdx].id) break

      [this._heap[idx], this._heap[smallerChildIdx] ] = [ this._heap[smallerChildIdx], this._heap[idx] ]

      idx = smallerChildIdx
    }
  }

  getParentIdx(idx: number) {
    return Math.floor((idx-1) /2)
  }

  getLeftChildIdx(idx: number) {
    return idx*2 + 1 
  }

  getRightChildIdx(idx: number) {
    return idx*2 + 2
  }
}

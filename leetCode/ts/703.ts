/**
 * You are part of a university admissions office and need to keep track of the kth highest test score from applicants in real-time. This helps to determine cut-off marks for interviews and admissions dynamically as new applicants submit their scores.
 *
 * You are tasked to implement a class which, for a given integer k, maintains a stream of test scores and continuously returns the kth highest test score after a new score has been submitted. More specifically, we are looking for the kth highest score in the sorted list of all scores.
 *
 * Implement the KthLargest class:
 *
 * KthLargest(int k, int[] nums) Initializes the object with the integer k and the stream of test scores nums.
 * int add(int val) Adds a new test score val to the stream and returns the element representing the kth largest element in the pool of test scores so far.
 * 
 * 
*/
class KthLargest {
  private minHeap = new MinHeap()
  private k
  constructor(k: number, nums: number[]) {
    nums.sort((a, b) => b - a)
    this.k = k
    for(let i = 0; i < k; i++) {
      this.minHeap.add(nums[i] ?? -100_000)
    }
  }

  add(val: number): number {
    if(this.minHeap.length < this.k) {
      this.minHeap.add(val)
    }

    if(val > this.minHeap.peek()) {
      this.minHeap.extract(val)
    }

    return this.minHeap.peek()
  }

}

class MinHeap {
  private _heap: number[] = []
  constructor() {
    this._heap
  }

  length() {
    return this._heap.length
  }

  add(val: number) {
    this._heap.push(val)
    this.heapifyUp()
  }

  extract(val: number) {
    if(this.isEmpty()) return undefined

    this._heap[0] = val
    this.heapifyDown()

    return this.peek()
  }

  isEmpty() {
    return this._heap.length === 0
  }

  peek() {
    return this._heap[0]
  }

  getParentIdx(idx: number) {
    return Math.floor((idx - 1)/ 2)
  }

  getLeftIdx(idx: number) {
    return idx*2 + 1
  }

  getRightIdx(idx: number) {
    return idx*2 + 2
  }

  heapifyUp() {
    let idx = this._heap.length - 1
    while(idx > 0) {
      let parentIdx = this.getParentIdx(idx)

      if(this._heap[idx] > this._heap[parentIdx]) break

      [ this._heap[idx], this._heap[parentIdx] ] = [ this._heap[parentIdx], this._heap[idx] ]
      idx = parentIdx  
    }
  }

  heapifyDown() {
    let idx = 0

    while(true) {
      let leftIdx = this.getLeftIdx(idx)
      let rightIdx = this.getRightIdx(idx)
      let smaller = leftIdx

      if(leftIdx > this._heap.length - 1) break

      if(this._heap[rightIdx]  < this._heap[smaller]) smaller = rightIdx

      if(this._heap[idx] < this._heap[smaller]) break

      [ this._heap[idx], this._heap[smaller] ] = [ this._heap[smaller], this._heap[idx] ]
      idx = smaller
    }
  }
}
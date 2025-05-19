/**
 * Uma fila é uma estrutura de dados FIFO.
 * First in First out.
 * 
 * É uma estrutura de dados poderosa, porém quando implementada em arrays causam perda de desempenho,
 * devido a reordenação do array apos a remoção de Array[0].
 * 
 * Para a implementação ótima, utilizamos uma linked list, que não causa reordenação de toda a fila
 * nas remoções.
 */

interface QueueI<T> {
  _head: NodeQueueI<T> | null
  _tail: NodeQueueI<T> | null
  _lenght: number
  enqueue: (val: T) => void
  dequeue: () => T | null
}

interface NodeQueueI<T> {
  _val: T 
  _next: NodeQueueI<T> | null
}

class NodeQueue<T> implements NodeQueueI<T> {
  _val
  _next = null
  constructor(val: T) {
    this._val = val

  }

  val() {
    return this._val
  }

  next() {
    return this._next
  }
}
  
export class Queue<T> implements QueueI<T> {
  _head: NodeQueueI<T> | null = null
  _tail: NodeQueueI<T> | null  = null
  _lenght: number = 0
  constructor() {}

  isEmpty() {
    return this._lenght === 0
  }

  enqueue(val: T) {
    const node = new NodeQueue(val)

    if (this.isEmpty()) {
      this._head = node
      this._tail = node
    } else {
      this._tail!._next = node
      this._tail = node
    }

    this._lenght++
  }

  dequeue() {
    if(this.isEmpty()) return null

    const val = this._head!._val
    this._head = this._head!._next
    this._lenght--

    if(this._lenght === 0) {
      this._tail = null
    }

    return val
  }
}
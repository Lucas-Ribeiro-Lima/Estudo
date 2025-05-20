/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

/**
 *  1 -> 3 -> 4
 * 
 *  2 -> 4 -> 5
 * 
 * dummy -> 1 
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode(0, null)
  let curr = dummy

  while(list1 && list2) {
    if(list1.val < list2.val) {
      curr.next = list1
      curr = curr.next
      list1 = list1.next
      continue
    }

    curr.next = list2
    curr = curr.next
    list2 = list2.next
  }

  curr.next = list1 || list2

  return dummy.next
};
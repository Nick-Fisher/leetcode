/**
 * 
 *  Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

    Example 1:

    Input: head = [1,2,3,4]

    Output: [2,1,4,3]

 *  Time Complexity: O(n), Space Complexity: O(1)
 * 
 */

function swapPairs(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(0, head);
  let current = dummy;

  while (current.next && current.next.next) {
    let first = current.next;
    let second = current.next?.next;

    first.next = second.next;
    second.next = first;
    current.next = second;
    current = first;
  }

  return dummy.next;
}

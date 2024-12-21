/**
 * 
 *  Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 * 
 *  Input: head = [1,2,6,3,4,5,6], val = 6
    Output: [1,2,3,4,5] 
 * 
    Time Complexity: O(n), Space Complexity: O(1)
 */

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let dummy = new ListNode(0, head);
  let current = dummy;

  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return dummy.next;
}

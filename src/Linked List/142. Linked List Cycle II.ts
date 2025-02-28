/**
 * 
 *  Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

    There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

    Do not modify the linked list.
 * 
 *  Time Complexity: O(n), Space Complexity: O(1)
 */

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next!;
    fast = fast.next.next!;

    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next!;
        fast = fast.next!;
      }

      return slow;
    }
  }

  return null;
}

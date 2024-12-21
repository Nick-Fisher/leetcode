/**
 * 
 *  You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

    The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes the largest integer less than or equal to x.

    For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.


 *  Time Complexity: O(n), Space Complexity: O(1)
 */



function deleteMiddleNode(head: ListNode | null): ListNode | null {
  if (!head!.next) return null;

  let slow = head;
  let fast = head!.next.next;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  slow.next = slow!.next?.next;

  return head;
}

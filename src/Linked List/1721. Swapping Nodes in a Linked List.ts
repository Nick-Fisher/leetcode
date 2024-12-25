/**
 * 
 *  You are given the head of a linked list, and an integer k.

    Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).


 *    Time Complexity: O(n), Space Complexity: O(1) 
 */

// we should actualy swap nodes instead of values
function swapNodes(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) return head;

  let dummyHead = new ListNode(0, head);

  // Find k-th node from start and its previous node
  let prevFirst = dummyHead;
  for (let i = 1; i < k; i++) {
    prevFirst = prevFirst.next;
  }

  let firstNode = prevFirst.next;

  // Find k-th node from end and its previous node
  let prevSecond = dummyHead;
  let fast = dummyHead;

  // Move fast k nodes ahead
  for (let i = 0; i < k; i++) {
    fast = fast.next!;
  }

  // Move both pointers until fast reaches end
  while (fast.next) {
    prevSecond = prevSecond.next;
    fast = fast.next;
  }

  let secondNode = prevSecond.next;

  if (firstNode === secondNode) return dummyHead.next;

  // Swap the nodes
  prevFirst.next = secondNode;
  prevSecond.next = firstNode;
  let temp = secondNode.next;
  secondNode.next = firstNode.next;
  firstNode.next = temp;

  return dummyHead.next;
}

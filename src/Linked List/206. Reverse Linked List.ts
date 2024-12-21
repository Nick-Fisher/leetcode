/**
 * 
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 * 
 * Input: head = [1,2,3,4,5]
    Output: [5,4,3,2,1
 *  
 *   Iterative approach: time complexity: O(n), space complexity: O(1)
 *   Recursive approach: time complexity: O(n), space complexity: O(n)
 * 
 */

// Iterative approach

function reverseListIterative(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current = head;

  while (current) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return current;
}

console.log(
  'reverseListIterative',
  reverseListIterative(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    ) // Output: [5,4,3,2,1]
  )
);

// Recursive approach

function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  let reversedLinkedList = reverseListRecursive(head.next);
  head.next.next = head;
  head.next = null;
  return reversedLinkedList;
}

console.log(
  'reverseListRecursive',
  reverseListRecursive(
    new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    ) // Output: [5,4,3,2,1]
  )
);

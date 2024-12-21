/**
 * 
 *  Given the head of a singly linked list, return true if it is a 
    palindrome
    or false otherwise.
 * 
 *  Input: head = [1,2,2,1]
    Output: true

 *  Time Complexity: O(n), Space Complexity: O(1)
 */

function isLinkedListPalindrome(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let prev = null;
  let current = slow;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  let first = head;
  let second = prev;

  while (second) {
    if (first!.val !== second.val) {
      return false;
    }

    first = first!.next;
    second = second.next;
  }

  return true;
}

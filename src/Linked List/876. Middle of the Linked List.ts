/**
 * 
 *  Given the head of a singly linked list, return the middle node of the linked list.

    If there are two middle nodes, return the second middle node.


    Input: head = [1,2,3,4,5]
    Output: [3,4,5]

    Time Complexity: O(n), Space Complexity: O(1)
 * 
 */

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

function middleNode2(head: ListNode | null): ListNode | null {
  let current = head;
  let tempcurrent = head;
  let counter = 0;

  while (current?.val) {
    counter++;
    current = current.next;
  }

  let step = counter % 2 ? Math.round(counter / 2) - 1 : counter / 2;

  while (step > 0) {
    tempcurrent = tempcurrent?.next!;
    step--;
  }

  return tempcurrent;
}

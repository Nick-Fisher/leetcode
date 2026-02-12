function getMiddleNode(node: ListNode | null): ListNode {
  let slow = node;
  let fast = node;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

function reverseList(current: ListNode | null): ListNode | null {
  let curr = current;
  let prev = null;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// Complexity: Time: O(N) | Space: O(1)

function pairSum(head: ListNode | null): number {
  let middleNode = getMiddleNode(head);

  let reversedHead = reverseList(middleNode);
  let max = 0;

  while (reversedHead) {
    max = Math.max(reversedHead.val + head.val, max);

    head = head.next;
    reversedHead = reversedHead.next;
  }

  return max;
}

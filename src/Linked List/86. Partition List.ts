/**
 *  
 *  Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

    You should preserve the original relative order of the nodes in each of the two partitions.
 * 
    Input: head = [1,4,3,2,5,2], x = 3
    Output: [1,2,2,4,3,5]
 * 

    Time Complexity: O(n), Space Complexity: O(1)
 */

function partition2(head: ListNode | null, x: number): ListNode | null {
  if (!head) return null;

  let left = new ListNode(0);
  let right = new ListNode(0);

  let ltail = left;
  let rtail = right;

  while (head) {
    if (head.val < x) {
      ltail.next = head;
      ltail = ltail.next;
    } else {
      rtail.next = head;
      rtail = rtail.next;
    }

    head = head.next;
  }

  ltail.next = right.next;
  rtail.next = null;

  return left.next;
}

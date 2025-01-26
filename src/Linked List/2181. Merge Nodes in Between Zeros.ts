/**
 *  
 *  You are given the head of a linked list, which contains a series of integers separated by 0's. The beginning and end of the linked list will have Node.val == 0.

    For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes. The modified list should not contain any 0's.

    Return the head of the modified linked list.
 * 
     Input: head = [0,3,1,0,4,5,2,0]
    Output: [4,11]
 *  
    *  Time Complexity: O(n), Space Complexity: O(1)
 */

const mergeNodes = (head: ListNode | null): ListNode | null => {
  if (!head) return null;

  let dummy = new ListNode(0);
  let prev = dummy;
  let current = head.next;
  let sum = 0;

  while (current) {
    if (current.val === 0) {
      if (sum) {
        prev.next = new ListNode(sum);
        prev = prev.next;
        sum = 0;
      }
    } else {
      sum += current.val;
    }

    current = current.next;
  }

  return dummy.next;
};

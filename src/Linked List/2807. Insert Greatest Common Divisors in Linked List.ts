/*

Given the head of a linked list head, in which each node contains an integer value.

Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.

Return the linked list after insertion.

The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

Input: head = [18,6,10,3]
Output: [18,6,6,2,10,1,3]

*/

function gcd(first: number, second: number) {
  let max = Math.max(first, second);
  let min = Math.min(first, second);
  let localMin = min;

  while (max % localMin !== 0 || min % localMin !== 0) {
    localMin--;
  }

  return localMin;
}

function insertGreatestCommonDivisors(head: ListNode | null): ListNode | null {
  let current = head;

  while (current && current.next) {
    let nextNode = current.next
    const gcdValue = gcd(current.val, current.next.val);

    const newNode = new ListNode(gcdValue);
    current.next = newNode;
    current.next.next = nextNode;

    current = nextNode;
  }

  return head;
}

// Better to use the Euclidean algorithm to calculate the gcd

// function gcd2(a: number, b: number): number {
//   return b === 0 ? a : gcd2(b, a % b);
// }

// function gcd(a: number, b: number): number {
//   while (b !== 0) {
//     let temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }
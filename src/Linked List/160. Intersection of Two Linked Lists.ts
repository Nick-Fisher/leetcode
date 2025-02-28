/**
 *  
 *  Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.


 * 
 * 
 *  Time Complexity: O(n), Space Complexity: O(1)
 * 
 */

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;
    let pA = headA;
    let pB = headB;

    let aLength = 0;
    let bLength = 0;

    while (pA && pA.next) {
        pA = pA.next;
        aLength++;
    }

    while (pB && pB.next) {
        pB = pB.next;
        bLength++;
    }

    let diff = Math.abs(aLength - bLength);
    

    pA = headA;
    pB = headB;

    while (diff > 0) {
      if (aLength > bLength) {
        pA = pA!.next;
      } else {
        pB = pB!.next;
      }
      diff--;
    }

    while (pA !== pB) {
        pA = pA!.next;
        pB = pB!.next;
    }

    return pA;
};


function getIntersectionNode2(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    if (!headA || !headB) return null;

    let a = headA;
    let b = headB;

    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }

    return a;
}
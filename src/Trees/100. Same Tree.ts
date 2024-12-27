/**
 * 
 *  Given the roots of two binary trees p and q, write a function to check if they are the same or not.

    Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 *  Input: p = [1,2,3], q = [1,2,3]
    Output: true

    Time Complexity: O(n), space complexity: O(n)
 *  
 */

// Recursive solution

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

// Iterative solution

// Time complexity: O(n), space complexity: O(n)

function isSameTreeIterative(p: TreeNode | null, q: TreeNode | null): boolean {
  let stack = [p, q];

  while (stack.length) {
    let right = stack.pop();
    let left = stack.pop();

    if (!left && !right) continue;
    if (!left || !right || left.val !== right.val) return false;

    stack.push(left.left, right.left);
    stack.push(left.right, right.right);
  }

  return true;
}
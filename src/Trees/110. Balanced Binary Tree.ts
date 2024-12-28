/**
 *
 *  Given a binary tree, determine if it is height-balanced.
 *  For this problem, a height-balanced binary tree is defined as:
 *  a binary tree in which the left and right subtrees of every node differ in height by no more than 1.
 *
 *  Example 1:
 *  Input: root = [3,9,20,null,null,15,7]
 *  Output: true
 *
 *
 * Time Complexity: O(n), Space Complexity: O(n)
 *
 */

// Recursive solution

const isBalanced = (root: TreeNode | null): boolean => {
  if (!root) return true;

  function height(root: TreeNode | null): number {
    if (!root) {
      return 0;
    } else {
      return 1 + Math.max(height(root.left), height(root.right));
    }
  }

  let leftH = height(root.left);
  let rightH = height(root.right);

  return Math.abs(leftH - rightH) > 1
    ? false
    : isBalanced(root.left) && isBalanced(root.right);
};

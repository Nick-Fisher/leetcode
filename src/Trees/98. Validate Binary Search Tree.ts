/**
 *
 *  Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 *  A valid BST is defined as follows:
 *
 *  The left subtree of a node contains only nodes with keys less than the node's key.
 *  The right subtree of a node contains only nodes with keys greater than the node's key.
 *  Both the left and right subtrees must also be binary search trees.
 *
 * Input: root = [2,1,3]
 * Output: true
 *
 * Time Complexity: O(n), space complexity: O(n)
 *
 */

// Recursive solution

function isValidBST(root: TreeNode | null): boolean {
  return validate(root, null, null);
}

function validate(
  node: TreeNode | null,
  min: number | null,
  max: number | null
): boolean {
  if (!node) return true;

  if ((min !== null && node.val <= min) || (max !== null && node.val >= max))
    return false;

  return (
    validate(node.left, min, node.val) && validate(node.right, node.val, max)
  );
}

// Iterative solution

// Time complexity: O(n), space complexity: O(n)

function isValidBSTIterative(root: TreeNode | null): boolean {
  if (!root) return true;

  let stack = [{ node: root, min: -Infinity, max: Infinity }];

  while (stack.length) {
    let { node, min, max } = stack.pop();

    if (!node) continue;

    if (node.val <= min || node.val >= max) return false;

    stack.push({ node: node.left, min, max: node.val });
    stack.push({ node: node.right, min: node.val, max });
  }

  return true;
}

/**
 *
 *  226. Invert Binary Tree
 *
 * Given the root of a binary tree, invert the tree, and return its root.
 *
 *  Time Complexity: O(n), space complexity: O(n)
 */

// Recursive solution

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);

  return root;
}

// Iterative solution

// Time complexity: O(n), space complexity: O(n)

function invertTreeIterative(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  let stack = [root];

  while (stack.length) {
    let node = stack.pop();

    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);

    let temp = node.left;
    node.left = node.right;
    node.right = temp;
  }

  return root;
}

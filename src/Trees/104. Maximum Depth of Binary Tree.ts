/**
 * 
 *  Given the root of a binary tree, return its maximum depth.

    A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 * Input: root = [3,9,20,null,null,15,7]
    Output: 3

    Time Complexity: O(n), space complexity: O(n)
 * 
 */

// Recursive solution

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

// Iterative solution

// Time complexity: O(n), space complexity: O(n)

function maxDepthIterative(root: TreeNode | null): number {
  if (!root) return 0;

  let stack = [{ node: root, depth: 1 }];
  let result = 0;

  while (stack.length) {
    let elem = stack.pop();

    result = Math.max(result, elem.depth);

    elem.node.right &&
      stack.push({ node: elem.node.right, depth: elem.depth + 1 });
    elem.node.left &&
      stack.push({ node: elem.node.left, depth: elem.depth + 1 });
  }

  return result;
}

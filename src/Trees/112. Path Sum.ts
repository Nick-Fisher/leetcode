/**
 *  Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

    A leaf is a node with no children.
 * 
 *  Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
    Output: true
    Explanation: The root-to-leaf path with the target sum is shown.

    Time Complexity: O(n), space complexity: O(n)
 */

// Recursive solution

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;
  if (!root.left && !root.right && root.val === targetSum) return true;

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}

// Iterative solution

// Time complexity: O(n), space complexity: O(n)

function hasPathSumIterative(
  root: TreeNode | null,
  targetSum: number
): boolean {
  if (!root) return false;

  let stack = [{ node: root, sum: root.val }];

  while (stack.length) {
    let elem = stack.pop();

    if (!elem.node.left && !elem.node.right && elem.sum === targetSum)
      return true;

    elem.node.right &&
      stack.push({
        node: elem.node.right,
        sum: elem.sum + elem.node.right.val,
      });
    elem.node.left &&
      stack.push({ node: elem.node.left, sum: elem.sum + elem.node.left.val });
  }

  return false;
}

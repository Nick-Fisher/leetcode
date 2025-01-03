/**
 *
 *  Given two binary trees original and cloned and given a reference to a node target in the original tree.
 *  The cloned tree is a copy of the original tree.
 *
 *  Return a reference to the same node in the cloned tree.
 *
 *  Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.
 *  Follow up: Solve the problem if repeated values on the tree are allowed.
 *
 *  Example 1:
 *  Input: tree = [7,4,3,null,null,6,19], target = 3
 *  Output: 3
 *
 *
 *  Time Complexity: O(n), Space Complexity: O(n)
 */

// Recursive solution

const getTargetCopy = (
  original: TreeNode | null,
  cloned: TreeNode | null,
  target: TreeNode | null
): TreeNode | null => {
  if (!original) return null;

  if (original === target) {
    return cloned;
  }

  return (
    getTargetCopy(original.left, cloned.left, target) ||
    getTargetCopy(original.right, cloned.right, target)
  );
};

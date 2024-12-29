/**
 *
 *  Given the root of a binary tree, return the sum of values of its deepest leaves.
 *
 *  Example 1:
 *
 *  Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
 *  Output: 15
 *
 * Time Complexity: O(n), Space Complexity: O(n)
 *
 *
 */

// Iterative solution

const deepestLeavesSumIterative = (root: TreeNode | null): number => {
  if (!root) return 0;

  let q = [root];
  let res = [];

  while (q.length) {
    let levelSize = q.length;
    let levelRes = [];

    for (let i = 0; i < levelSize; i++) {
      let node = q.shift();

      levelRes.push(node.val);

      node.left && q.push(node.left);
      node.right && q.push(node.right);
    }

    res.push(levelRes);
  }

  let sum = res.at(-1).reduce((prev, next) => prev + next, 0);
  return sum;
};

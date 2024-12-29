/**
 * Given the root of a binary tree, return an array of the largest value in each row of the tree (0-indexed).
 *   
 * Input: root = [1,3,2,5,3,null,9]
    Output: [1,3,9]
 *  
    Time Complexity: O(n), Space Complexity: O(n)
 */

// BFS solution

const largestValues = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const result: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const levelSize = queue.length;
    let max = -Infinity;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;

      max = Math.max(max, node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(max);
  }

  return result;
};

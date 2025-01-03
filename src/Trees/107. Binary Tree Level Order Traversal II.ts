/**
 *
 *  Given the root of a binary tree, return the bottom-up level order traversal of its nodes' values. (i.e., from left to right, level by level from leaf to root).
 *
 *  Example 1:
 *  Input: root = [3,9,20,null,null,15,7]
 *  Output: [[15,7],[9,20],[3]]
 *
 *  Time Complexity: O(n), Space Complexity: O(n)
 */

// BFS solution

const levelOrderBottom = (root: TreeNode | null): number[][] => {
  if (!root) return [];

  const result: number[][] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;

      currentLevel.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.unshift(currentLevel);
  }

  return result;
};

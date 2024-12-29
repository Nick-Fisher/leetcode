/**
 *
 *  Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).
 *
 *  Input: root = [3,9,20,null,null,15,7]
 *  Output: [[3],[20,9],[15,7]]
 *
 *  Time Complexity: O(n), Space Complexity: O(n)
 */

// BFS solution

const zigzagLevelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return [];

  const result: number[][] = [];
  const queue: TreeNode[] = [root];
  let isLeftToRight = true;

  while (queue.length) {
    const levelSize = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;

      isLeftToRight
        ? currentLevel.push(node.val)
        : currentLevel.unshift(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(currentLevel);
    isLeftToRight = !isLeftToRight;
  }

  return result;
};

/**
 *
 *  Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.
 *
 *  Example 1:
 *  Input: root = [1,2,3,null,5,null,4]
 *  Output: [1,3,4]
 *
 *
 *  Time Complexity: O(n), Space Complexity: O(n)
 */

// BFS solution

const rightSideView = (root: TreeNode | null): number[] => {
  if (!root) return [];

  const result: number[] = [];
  const queue: TreeNode[] = [root];

  while (queue.length) {
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift()!;

      if (i === levelSize - 1) {
        result.push(node.val);
      }

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return result;
};

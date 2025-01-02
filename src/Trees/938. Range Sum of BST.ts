/**
 *  
 *  Given the root node of a binary search tree, return the sum of values of all nodes with a value in the range [low, high].
 *  
 *  Example 1: 
 *  Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
 *  Output: 32
 * 
 *  
 *  Time Complexity: O(n), Space Complexity: O(n)
 * 
 *  
 */

// Recursive solution

const rangeSumBST = (root: TreeNode | null, low: number, high: number): number => {
  if (!root) return 0;

  if (root.val < low) {
    return rangeSumBST(root.right, low, high);
  } else if (root.val > high) {
    return rangeSumBST(root.left, low, high);
  } else {
    return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
  }
};

// Iterative solution

const rangeSumBSTIterative = (root: TreeNode | null, low: number, high: number): number => {
  if (!root) return 0;

  let stack: TreeNode[] = [root];
  let sum = 0;

  while (stack.length) {
    let node = stack.pop()!;

    if (node.val >= low && node.val <= high) {
      sum += node.val;
    }

    if (node.left && node.val > low) {
      stack.push(node.left);
    }

    if (node.right && node.val < high) {
      stack.push(node.right);
    }
  }

  return sum;
};
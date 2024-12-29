/** 
 *  
 *  Given a binary tree root and an integer target, delete all the leaf nodes with value target.

    Note that once you delete a leaf node with value target, if its parent node becomes a leaf node and has the value target, it should also be deleted (you need to continue doing that until you cannot).
 
    Example 1:
 *  Input: root = [1,2,3,2,null,2,4], target = 2
 *   Output: [1,null,3,null,4]
 * 
 *  Time Complexity: O(n), Space Complexity: O(n)
 * 
 */

// Recursive solution

const removeLeafNodes = (root: TreeNode | null, target: number): TreeNode | null => {
  if (!root) return null;

  root.left = removeLeafNodes(root.left, target);
  root.right = removeLeafNodes(root.right, target);

  if (!root.left && !root.right && root.val === target) {
    return null;
  }

  return root;
};

// Iterative solution

const removeLeafNodesIterative = (root: TreeNode | null, target: number): TreeNode | null => {
  if (!root) return null;

  let stack: TreeNode[] = [root];
  let parents: TreeNode[] = [null];

  while (stack.length) {
    let node = stack.pop()!;
    let parent = parents.pop()!;

    if (!node.left && !node.right && node.val === target) {
      if (parent) {
        if (parent.left === node) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    } else {
      if (node.right) {
        stack.push(node.right);
        parents.push(node);
      }

      if (node.left) {
        stack.push(node.left);
        parents.push(node);
      }
    }
  }

  return root.val === target && !root.left && !root.right ? null : root;
};

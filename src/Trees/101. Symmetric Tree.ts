/** 
 * 
 *  
 *  Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

    Input: root = [1,2,2,3,4,4,3]
    Output: true
 * 
    
    Time Complexity: O(n), space complexity: O(n)
    
 */

// Iterative solution

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true;

  let stack = [root.left, root.right];

  while (stack.length) {
    let right = stack.pop();
    let left = stack.pop();

    if (!left && !right) continue;
    if (!left || !right || left.val !== right.val) return false;

    stack.push(left.left, right.right);
    stack.push(left.right, right.left);
  }

  return true;
}

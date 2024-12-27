/** 
 *  
 *  You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

    Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.


 *  Input: root = [4,2,7,1,3], val = 5
    Output: [4,2,7,1,3,5] 
 *  
 *  Time Complexity: O(n), space complexity: O(n) 
 */

// Recursive solution

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val);

  if (root.val < val) root.right = insertIntoBST(root.right, val);
  if (root.val > val) root.left = insertIntoBST(root.left, val);

  return root;
}

// Iterative solution

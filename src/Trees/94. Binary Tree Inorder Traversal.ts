/**
 * 
 *  Given the root of a binary tree, return the inorder traversal of its nodes' values.
 * 
 *  Example 1:

    Input: root = [1,null,2,3]

    Output: [1,3,2]


 *  Time Complexity: O(n), Space Complexity: O(n)
 * 
 */

function inorderTraversalRecursive(root: TreeNode | null): number[] {
  let res: number[] = [];

  function inorder(node: TreeNode | null) {
    if (!node) return;

    inorder(node.left);
    res.push(node.val);
    inorder(node.right);
  }

  inorder(root);

  return res;
}

function inorderTraversalIterative(root: TreeNode | null): number[] {
  if (!root) return [];

  let res: number[] = [];

  let st: TreeNode[] = [];

  let curr = root;

  while (curr || st.length) {
    while (curr) {
      st.push(curr);
      curr = curr.left;
    }

    curr = st.pop()!;
    res.push(curr.val);
    curr = curr.right;
  }

  return res;
}

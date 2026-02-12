// Iterative solution


public class Solution
{
    public IList<int> PostorderTraversal(TreeNode root)
    {
        if (root == null) return [];

        var result = new List<int>();
        var stack = new Stack<TreeNode>();

        stack.Push(root);

        while (stack.Count > 0)
        {
            var node = stack.Pop();
            result.Add(node.val);

            if (node.left != null) stack.Push(node.left);
            if (node.right != null) stack.Push(node.right);
        }

        result.Reverse();

        return result;
    }
}
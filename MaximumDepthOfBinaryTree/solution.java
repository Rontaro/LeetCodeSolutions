/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    private int max = 1;
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }

        maxDepth(root, 1);
        return max;
    }

     public TreeNode maxDepth(TreeNode root, int i) {
        if (root != null && (root.left != null || root.right != null)) {
            TreeNode left = maxDepth(root.left, i+1);
            TreeNode rigth = maxDepth(root.right, i+1);
        }
        if (i > max) {
            max = i;
        }
        return null;
    }
}
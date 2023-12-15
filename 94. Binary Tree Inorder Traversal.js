/*

Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:
    Input: root = [1,null,2,3]
    Output: [1,3,2]

Example 2:
    Input: root = []
    Output: []

Example 3:
    Input: root = [1]
    Output: [1]

Constraints:
    The number of nodes in the tree is in the range [0, 100].
    -100 <= Node.val <= 100

Follow up: Recursive solution is trivial, could you do it iteratively?

🧠 BRAINSTORM

Algorithm 1: Recursive DFS
Time: O(N) where N is the number of nodes
Space: O(N) where N is the number of nodes

Algorithm 2: Iterative using a while loop and a stack
Time: O(N) where N is the number of nodes
Space: O(N) where N is the number of nodes

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const inorderTraversalDfs = (root) =>
	root
		? [
				...inorderTraversal(root.left),
				root.val,
				...inorderTraversal(root.right),
		  ]
		: [];

const inorderTraversalDfsHelper = (root) => {
	const result = [];

	const dfs = (node) => {
		if (!node) return;
		dfs(node.left);
		result.push(node.val);
		dfs(node.right);
	};

	dfs(root);
	return result;
};

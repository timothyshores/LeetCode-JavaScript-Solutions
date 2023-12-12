/*

Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: [[3],[20,9],[15,7]]

Example 2:
    Input: root = [1]
    Output: [[1]]

Example 3:
    Input: root = []
    Output: []

Constraints:
    The number of nodes in the tree is in the range [0, 2000].
    -100 <= Node.val <= 100

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = (root) => {
	if (!root) return [];

	let queue = [root];
	const allLevelsValues = [];
	let shouldReverse = false;

	while (queue.length) {
		const nextLevelNodes = [];
		const currentLevelValues = [];

		for (const node of queue) {
			if (node.left) nextLevelNodes.push(node.left);
			if (node.right) nextLevelNodes.push(node.right);
			shouldReverse
				? currentLevelValues.unshift(node.val)
				: currentLevelValues.push(node.val);
		}

		shouldReverse = !shouldReverse;
		allLevelsValues.push(currentLevelValues);
		queue = nextLevelNodes;
	}

	return allLevelsValues;
};

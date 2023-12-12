/*

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: [[3],[9,20],[15,7]]

Example 2:
    Input: root = [1]
    Output: [[1]]

Example 3:
    Input: root = []
    Output: []

Constraints:
    The number of nodes in the tree is in the range [0, 2000].
    -1000 <= Node.val <= 1000

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
const levelOrderInitialSolution = (root) => {
	if (!root) return [];

	const nodesToVisit = [[root, 0]];
	const treeValuesByLevel = [];

	while (nodesToVisit.length > 0) {
		const currentTuple = nodesToVisit.shift();
		const [currentNode, currentLevel] = currentTuple;
		if (currentNode.left) {
			nodesToVisit.push([currentNode.left, currentLevel + 1]);
		}
		if (currentNode.right) {
			nodesToVisit.push([currentNode.right, currentLevel + 1]);
		}
		if (Array.isArray(treeValuesByLevel[currentLevel])) {
			treeValuesByLevel[currentLevel] = [
				...treeValuesByLevel[currentLevel],
				currentNode.val,
			];
		} else {
			treeValuesByLevel[currentLevel] = [currentNode.val];
		}
	}

	return treeValuesByLevel;
};

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderRefactoredSolution = (root) => {
	if (!root) return [];

	let queue = [root];
	const allLevelsValues = [];

	while (queue.length) {
		const nextLevelNodes = [];
		const currentLevelValues = [];

		for (const node of queue) {
			if (node.left) nextLevelNodes.push(node.left);
			if (node.right) nextLevelNodes.push(node.right);
			currentLevelValues.push(node.val);
		}

		allLevelsValues.push(currentLevelValues);
		queue = nextLevelNodes;
	}

	return allLevelsValues;
};

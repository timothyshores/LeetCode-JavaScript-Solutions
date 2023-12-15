/*

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:
    Input: root = [3,9,20,null,null,15,7]
    Output: 3

Example 2:
    Input: root = [1,null,2]
    Output: 2

Constraints:
    The number of nodes in the tree is in the range [0, 104].
    -100 <= Node.val <= 100

*/

// Recursive DFS
const maxDepthDFS = (root) => {
    const dfs = (node) => {
        if (!node) return 0;

        const leftSubtreeDepth = dfs(node.left);
        const rightSubtreeDepth = dfs(node.right);

        return 1 + Math.max(leftSubtreeDepth, rightSubtreeDepth);
    }
	return dfs(root);
};

// BFS using 1 queue and Array.shift()
const bfsOneQueueShift = (root) => {
	if (!root) return 0;

	const queue = [root];
	let maximumDepth = 0;

	while (queue.length > 0) {
		const currentLevelLength = queue.length;

		// Iterate through nodes on current level
		for (let i = 0; i < currentLevelLength; i++) {
			const currentNode = queue.shift();
			// Add nodes in the next level to the queue
			if (currentNode.left) queue.push(currentNode.left);
			if (currentNode.right) queue.push(currentNode.right);
		}

		maximumDepth += 1;
	}

	return maximumDepth;
};

// Iterative BFS using 1 queue and Array.splice()
const bfsOneQueueSplice = (root) => {
    if (!root) return 0;

    const queue = [root];  
    let maximumDepth = 0; 

    while (queue.length > 0) { 
        const currentLevelLength = queue.length;

        for (let i = 0; i < currentLevelLength; i++) {
            const currentNode = queue[i];
            if (currentNode.left) queue.push(currentNode.left);
            if (currentNode.right) queue.push(currentNode.right);
        }

        queue.splice(0, currentLevelLength);
        maximumDepth += 1;
    }

    return maximumDepth;
};

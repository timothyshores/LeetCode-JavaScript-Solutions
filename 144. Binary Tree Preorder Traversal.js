/*

144. Binary Tree Preorder Traversal

Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:
    Input: root = [1,null,2,3]
    Output: [1,2,3]

Example 2:
    Input: root = []
    Output: []

Example 3:
    Input: root = [1]
    Output: [1]

Constraints:
    The number of nodes in the tree is in the range [0, 100].
    -100 <= Node.val <= 100

Follow up: Recursive solution is trivial, could you do it iteratively ?

*/

/*

Prompt

    Given a root node of a binary tree return an array of the preorder traversal

    Do NOT traverse the tree using recursion. 

    Use a stack to store nodes as you traverse the tree in preorder fashion.

Questions

    What is preorder traversal?

    A preorder traversal is start at the root
    Visit it's left child
    If the left child node has another left child continue visiting the left child node until it has no left child node
    Go back up to it's parent node 
    Check if it has a right child node, if it does then visit it
    Continue going up parent nodes until you're at the root node and then explore the right side of the tree
    Visit the root node's right child node and then continue through the left child nodes until there are no more left child nodes
    Go up a node and if there's a right child node visit that right child node
    Continue going up and then down the right until all nodes have been visited

High Level Approach

    Want to visit each node in the following order Root, Left, Right
    We'll need to use a stack to keep track of nodes
    We'll also need to store the order of the nodes that we visited in another array

*/

/**
 * Definition for a binary tree node.
 * function Node(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
const preorderTraversal = (root) => {
	// Handle edge case where root node is null or undefined
	if (!root) return [];

	// Initialize an empty array to stores the preorder traversal of the root nodes' values
	const nodeValues = [];

	// Create an empty stack and push root to it
	const nodeStack = [root];

	// Continue iterating through the binary tree until all nodes have been visited
	while (nodeStack.length) {
		// Pop the top element from nodeStack and destructure the binary tree node
		const { val, right, left } = nodeStack.pop();

		// Add current node's value to nodeValues
		nodeValues.push(val);

		// Push right child first to place under left child element in nodeStack
		if (right) nodeStack.push(right);

		// Push left child last to top of stack to pop off first from nodeStack
		if (left) nodeStack.push(left);
	}

	// Return preorder traversal of the root nodes' values
	return nodeValues;
};

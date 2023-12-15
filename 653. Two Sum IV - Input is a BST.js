/*

Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

Example 1:
    Input: root = [5,3,6,2,4,null,7], k = 9
    Output: true

Example 2:
    Input: root = [5,3,6,2,4,null,7], k = 28
    Output: false

Constraints:
    The number of nodes in the tree is in the range [1, 104].
    -104 <= Node.val <= 104
    root is guaranteed to be a valid binary search tree.
    -105 <= k <= 105


🔎 EXPLORE

Think of two sum for an array
- Iterate through the array
    - Worst time complexity O(n^2) using nested for loops with O(1) space
    - Best time complexity O(N) using a set or hashmap to store previous values
        - Hashmap used when want to return the indicies or values
        - Set used when returning the boolean true or false

🧠 BRAINSTORM

Similar to the O(N) time complexity for two sum on an array
Either 
- Store the previously seen or visited values
- Store the difference between target and the previously seen or visited values

Algorithm 1: Iterative BFS
Time: O(N)
Worst Case Space: O(N) technically N/2 where N is the number of leaf nodes
Best Case Space: O(1) if BST is skewed like a linked list where only 1 node is stored in the queue

Algorithm 2: Recursive DFS
Time: O(N)
Worst Case Space: O(log n) maximum depth of the call stack if the tree is balanced
Best Case Space: O(N) where N is the number of N in the BST if BST is skewed like a linked list 

📆 PLAN

Iterative BFS
    Create an empty set called seenValues
    Create a queue with the root node which will store the nodes to visit
    Traverse the BST using either either BFS or recursive DFS
    Everytime we visit a node
    - Get the node of the current node
    - Check the set if there's a previously seen value that sums to target k
        - If the set contains a value that sums to target
            - Return true
        - Else set does NOT contain a value that sums to target
            - Add the current node's value to the set
            - Continue traversing the BST
    - After visiting all nodes in the BST
        - If no 2 nodes values whose sum equals target 
        - Return false

*/

// Algorithm 1: Iterative Breadth First Search
const findTargetBfs = (root, k) => {
	const prevValues = new Set();
	const nodesToVisit = [root];

	while (nodesToVisit.length > 0) {
		const currentNode = nodesToVisit.pop();

		if (prevValues.has(k - currentNode.val)) return true;
		prevValues.add(currentNode.val);

		if (currentNode.left) nodesToVisit.unshift(currentNode.left);
		if (currentNode.right) nodesToVisit.unshift(currentNode.right);
	}

	return false;
};

// Algorithm 2: Recursive Depth First Search (DFS)
const findTargetDfs = (root, k) => {
	const prevValues = new Set();

	const dfs = (node) => {
		if (!node) return false;
		if (prevValues.has(k - node.val)) return true;
		prevValues.add(node.val);
		return dfs(node.left) || dfs(node.right);
	};

	return dfs(root);
};

/*

701. Insert into a Binary Search Tree

You are given the root node of a binary search tree (BST) and a value to insert into the tree. Return the root node of the BST after the insertion. It is guaranteed that the new value does not exist in the original BST.

Notice that there may exist multiple valid ways for the insertion, as long as the tree remains a BST after insertion. You can return any of them.

Example 1:
    Input: root = [4,2,7,1,3], val = 5
    Output: [4,2,7,1,3,5]
    Explanation: Another accepted tree is:

Example 2:
    Input: root = [40,20,60,10,30,50,70], val = 25
    Output: [40,20,60,10,30,50,70,null,null,25]

Example 3:
    Input: root = [4,2,7,1,3,null,null,null,null,null,null], val = 5
    Output: [4,2,7,1,3,5]

Constraints:

    The number of nodes in the tree will be in the range [0, 104].
    -108 <= Node.val <= 108
    All the values Node.val are unique.
    -108 <= val <= 108
    It's guaranteed that val does not exist in the original BST.

*/

/*

EXPLORE

Want to insert new node in a BST

BRAINSTORM

Could use either iterative or recursion to insert the new node

Both O(log N) time complexity
Recursion is O(log N) space while iterative is O(1)

Approach 1: Iterative while loop
Time Complexity: O(log N) if binary tree is balanced else O(N) if BST is a linked list
Space Complexity: O(1) need to store current node pointer in memeory

Approach 1: Recursive
Time Complexity: O(log N) if binary tree is balanced else O(N) if BST is a linked list
Space Complexity: O(log N) for the recursive call stack

PLAN

Approach 1:

    If the root node is null create a new TreeNode with val and return the new TreeNode

    Create a pointer variable and set it to the root node

    The value that's beging inserted will be either less than or greater than the current node's value

        Insert a value that's less than the current node's value
            If current node has a left child node
                Set current node pointer to the current node's left child node
            Else current node does NOT have a left child node
                Create a new TreeNode with the value passed into the function
                Set the current node's left child property to the new TreeNode
                Return the root node

        Insert a value that's greater than the current node's value
            If current node has a right child node
                Set current node pointer to the current node's right child node
            Else current node does NOT have a right child node
                Create a new TreeNode with the value passed into the function
                Set the current node's right child property to the new TreeNode
                Return the root node

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
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = (root, val) => {
	// If the root node is null create a new TreeNode with val and return the new TreeNode
	if (!root) return new TreeNode(val);

	// Create a pointer variable and set it to the root node
	let node = root;

	// Continue traversing the BST while current node pointer is truthy
	while (node) {
		// Insert a value that's less than the current node's value
		if (val < node.val) {
			// If current node has a left child node
			if (node.left) {
				// Set current node pointer to the current node's left child node
				node = node.left;
				continue;
			} else {
				// Current node does NOT have a left child node
				node.left = new TreeNode(val);
				return root;
			}
		}
		// Insert a value that's greater than the current node's value
		else {
			// If current node has a right child node
			if (node.right) {
				// Set current node pointer to the current node's right child node
				node = node.right;
				continue;
			} else {
				// Current node does NOT have a right child node
				node.right = new TreeNode(val);
				return root;
			}
		}
	}
};

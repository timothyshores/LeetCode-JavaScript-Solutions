class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		let node = new Node(value);

		// If no root node then made the new node the root node
		if (!this.root) {
			this.root = node;
		} else {
			// BST has a root node
			let currentNode = this.root;

			while (currentNode) {
				if (value > currentNode.value) {
					if (currentNode.right) currentNode = currentNode.right;
					else {
						currentNode.right = node;
						break;
					}
				} else if (value < currentNode.value) {
					if (currentNode.left) currentNode = currentNode.left;
					else {
						currentNode.left = node;
						break;
					}
				} else {
					return undefined;
				}
			}
		}

		return this;
	}

	/**
	 * Search for a value in the BST
	 *
	 * @param {any} value that method is looking for in the BST
	 * @return Returns true if a node with a specific value is in the BST else returns false
	 */
	find(value) {
		// Start at the root node
		let currentNode = this.root;

		// Check if there's a root node, if there's no root then the search is completed
		if (this.root === null) return false;

		// If there is a root
		while (true) {
			// Compare the value we're look for to the value of the root if the values are equal return true
			if (value === currentNode.value) return true;

			// If the value we're looking for is greater than value of the root
			if (value > currentNode.value) {
				// Check if the root has a right child node
				if (currentNode.right) {
					// If the right child node exists then update the current node to be the right child current node
					currentNode = currentNode.right;
				} else {
					// If the right child node does NOT exist return false
					return false;
				}
			}
			// If the value we're looking for is less than value of the root
			if (value < currentNode.value) {
				// Check if the root has a left child node
				if (currentNode.left) {
					// If the left child node exists then update the current node to be the left child current node
					currentNode = currentNode.left;
				} else {
					// If the left child node does NOT exist return false
					return false;
				}
			}
		}
	}
}

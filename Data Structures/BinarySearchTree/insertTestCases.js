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
				} else {
					if (currentNode.left) currentNode = currentNode.left;
					else {
						currentNode.left = node;
						break;
					}
				}
			}
		}

		return this;
	}
}

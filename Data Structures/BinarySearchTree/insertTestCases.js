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
}

// Initialize and instantiate new binary search tree called bst
const bst = new BinarySearchTree();

// Insert 2 and verify that the root is 2 with no child nodes
bst.insert(2);
console.log(bst.root.value === 2); // true
console.log(bst.root.left === null); // true
console.log(bst.root.right === null); // true

// Insert 2 again returns undefined and 2 is still the root node with no child nodes
console.log(bst.insert(2) === undefined); // true
console.log(bst.root.value === 2); // true
console.log(bst.root.left === null); // true
console.log(bst.root.right === null); // true

// Insert 3 and verify that 3 was inserted as the right child of the root and that it has no child nodes
bst.insert(3);
console.log(bst.root.right.value === 3); // true
console.log(bst.root.left === null); // true
console.log(bst.root.right.left === null); // true
console.log(bst.root.right.right === null); // true

// Insert 1 and verify that 1 was inserted as the left child of the root and that it has no child nodes
bst.insert(1);
console.log(bst.root.left.value === 1); // true
console.log(bst.root.left.left === null); // true
console.log(bst.root.left.right === null); // true

// Insert 4 into the bst and verify that 4 was added as the right child of 3 and 4 has no children
bst.insert(4);
console.log(bst.root.right.right.value === 4); // true
console.log(bst.root.right.right.right === null); // true
console.log(bst.root.right.right.left === null); // true

// Insert 4 into the bst and verify that 0 was added as the left child of 1 and 0 has no children
bst.insert(0);
console.log(bst.root.left.left.value === 0); // true
console.log(bst.root.left.left.right === null); // true
console.log(bst.root.left.left.left === null); // true

// Verify that root is 2, right of root is 3, left of root is 1, right of 3 is 4 and left of 1 is 0
console.log(bst.root.value === 2); // true
console.log(bst.root.left.value === 1); // true
console.log(bst.root.right.value === 3); // true
console.log(bst.root.left.left.value === 0); // true
console.log(bst.root.right.right.value === 4); // true

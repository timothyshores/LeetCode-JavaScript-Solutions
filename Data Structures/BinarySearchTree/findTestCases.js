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

// Initialize and instantiate new binary search tree called bst
const bst = new BinarySearchTree();

// Call find on an empty BST returns false
console.log(bst.find(1)); // false;
console.log(bst.find(0)); // false;
console.log(bst.find(10)); // false;
console.log(bst.find(101)); // false;

// Insert 41 as the root in in BST
bst.insert(41);
console.log(bst.find(41)); // true;

// Insert 20 as the left child of the root node
//      41
//     /
//   20

bst.insert(20);
console.log(bst.find(20)); // true;

// Insert 65 as the right child of the root node
//      41
//     /  \
//   20    65

bst.insert(65);
console.log(bst.find(65)); // true;

// Insert 11 as the left child of 20
//        41
//       /  \
//     20    65
//    /
//  11

bst.insert(11);
console.log(bst.find(11)); // true;

// Insert 29 as the right child of 20
//        41
//       /  \
//     20    65
//    /  \
//  11    29

bst.insert(29);
console.log(bst.find(29)); // true;

// Insert 50 as the left child of 65
//          41
//         /   \
//       /      \
//     20        65
//    /  \      /
//  11    29  50

bst.insert(50);
console.log(bst.find(50)); // true;

// Insert 91 as the left child of 65
//          41
//         /   \
//       /      \
//     20        65
//    /  \      /  \
//  11    29  50    91

bst.insert(91);
console.log(bst.find(91)); // true;

// Call find on number values that do not exist in the BST returns false
console.log(bst.find(10)); // false;
console.log(bst.find(12)); // false;
console.log(bst.find(21)); // false;
console.log(bst.find(30)); // false;
console.log(bst.find(42)); // false;
console.log(bst.find(63)); // false;
console.log(bst.find(66)); // false;
console.log(bst.find(53)); // false;
console.log(bst.find(90)); // false;
console.log(bst.find(93)); // false;

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

    // Start at the root
    // Check if there's a root
        // If there's no root then the search is completed
        // If there is a root
            // Compare the value we're look for to the value of the root
                // If the values are equal
                    // Return the root node
                // If the values are NOT equal
                    // Compare the value we're searching for to the value of the root
                        // If the value we're looking for is greater than value of the root
                            // Check if the root has a right child node
                                // If the right child node exists then we rinse and repeat
                                // If the right child node does NOT exist then end the search
                        // If the value we're looking for is less than value of the root
                                // Check if the root has a left child node
                                // If the left child node exists then we rinse and repeat
                                // If the left child node does NOT exist then end the search
        
    }
}

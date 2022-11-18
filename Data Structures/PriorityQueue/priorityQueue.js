class Node {
	constructor(value, priority) {
		this.value = value;
		this.priority = priority;
	}
}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

	/**
	 * Swap the position of two nodes in this.values
	 *
	 * @param {number} index1 of the first node to be swapped
	 * @param {number} index2 of the second node to be swapped
	 */
	swap(index1, index2) {
		const index1Value = this.values[index1];
		const index2Value = this.values[index2];

		this.values[index1] = index2Value;
		this.values[index2] = index1Value;
	}

	/**
	 * Return the priority of a node at a given index
	 *
	 * @param {number} index of the node
	 * @return {number} priority for the node at this.values[index]
	 */
	getNodePriority = (index) => this.values[index]?.priority;

	/**
	 * Return the parent index for a given node
	 *
	 * @param {number} index of the node
	 * @return {number} index of the parent node
	 */
	getParentIndex = (index) => Math.floor((index - 1) / 2);

	/**
	 * Return the index of the left child node
	 *
	 * @param {any} value of the node to be inserted into the priority queue
	 * @param {number} priority of the node to be inserted into the priority queue
	 * @return {node[]} array of nodes where the first node has the lowest priority value
	 */
	enqueue(value, priority) {
		// Create new node with value and priority passed into enqueue method
		let newNode = new Node(value, priority);

		// Add variable val for better readability compared to this.values
		const val = this.values;

		// Push value to the end of values array
		val.push(newNode);

		// Get the index of the new value pushed into the values array
		let childIndex = val.length - 1;

		// Call helper function and set parentIndex to the index of the parent node for the enqueued node
		let parentIndex = this.getParentIndex(childIndex);

		// Get value of the parent of the new value pushed into the array
		let parentNodePriority = this.getNodePriority(parentIndex);

		// If new node's priority is less than the parent node's priority then bubble up
		while (priority < parentNodePriority) {
			// Swap parent and child nodes in values array
			this.swap(childIndex, parentIndex);

			// Update child node to the current parent node index
			childIndex = parentIndex;

			// Use getParentIndex helper function to update new parent node index
			parentIndex = this.getParentIndex(childIndex);

			// Update parentNodePriority to determine if loop should repeat
			parentNodePriority = this.getNodePriority(parentIndex);
		}

		return val;
	}

	/**
	 * Return the index of the left child node
	 *
	 * @param {number} index of the parent node in this.values
	 * @return {number} the index of the left child node
	 */
	getLeftChildIndex = (index) => {
		if (index * 2 + 1 < this.values.length) return index * 2 + 1;
		return null;
	};

	/**
	 * Return the index of the right child node
	 *
	 * @param {number} index of the parent node in this.values
	 * @return {number} the index of the right child node
	 */
	getRightChildIndex = (index) => {
		if (index * 2 + 2 < this.values.length) return index * 2 + 2;
		return null;
	};

	/**
	 * Return the node with the lowest priority value in the priority queue
	 *
	 * @return {node} node in the first index of this.values
	 */
	dequeue() {
		// Add variable val for better readability than this.values
		const val = this.values;

		// Handle edge cases where this.values is either empty or one element
		if (val.length === 0) return;
		if (val.length === 1) return val.pop();

		// Swap the first and last element in this.values;
		this.swap(0, val.length - 1);

		// Call .pop() on this.values to return the last element or the node with the smallest priority value in the priority queue
		const minPriority = this.values.pop();

		// Parent index is 0 which is the new root node after the swap
		let parentIndex = 0;
		const parentPriority = val[0].priority;

		// Call getLeftChildIndex with the parent index and create variable for left child value
		let leftChildIndex = this.getLeftChildIndex(parentIndex);
		let leftChildPriority = val[leftChildIndex]?.priority;

		// Call getRightChildIndex with the parent index and create variable for right child value
		let rightChildIndex = this.getRightChildIndex(parentIndex);
		let rightChildPriority = val[rightChildIndex]?.priority;

		// Continue to loop as long as the new root new is less than either its left or right child node's value
		while (
			leftChildPriority < parentPriority ||
			rightChildPriority < parentPriority
		) {
			// If the left child's value is less than the parent and right child priority
			if (
				leftChildPriority < parentPriority &&
				leftChildPriority < rightChildPriority
			) {
				// Swap parent node with left child node and update parent index
				this.swap(parentIndex, leftChildIndex);
				parentIndex = leftChildIndex;
			}
			// If the right child's value is greater than the parent value and the left child value
			if (
				rightChildPriority < parentPriority &&
				rightChildPriority < leftChildPriority
			) {
				// Swap parent node with right child node and update parent index
				this.swap(parentIndex, rightChildIndex);
				parentIndex = rightChildIndex;
			}

			// Recalculate new left and right child indexes by calling the approbate helper function
			leftChildIndex = this.getLeftChildIndex(parentIndex);
			rightChildIndex = this.getRightChildIndex(parentIndex);

			// Set new left and right child priorities
			leftChildPriority = val[leftChildIndex]?.priority;
			rightChildPriority = val[rightChildIndex]?.priority;
		}

		// Return the root
		return minPriority;
	}
}

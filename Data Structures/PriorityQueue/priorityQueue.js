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

	swap(index1, index2) {
		const index1Value = this.values[index1];
		const index2Value = this.values[index2];

		this.values[index1] = index2Value;
		this.values[index2] = index1Value;
	}

	getNodePriority = (index) => this.values[index]?.priority;
	getParentIndex = (index) => Math.floor((index - 1) / 2);

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
}

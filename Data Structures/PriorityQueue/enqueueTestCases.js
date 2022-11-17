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

// All test cases return true

const pq = new PriorityQueue();

pq.enqueue("First", 3);

console.log(pq.values.length === 1); // true
console.log(pq.values[0].priority === 3); // true
console.log(pq.values[0].value === "First"); // true

pq.enqueue("Second", 2);

console.log(pq.values.length === 2); // true
console.log(pq.values[0].priority === 2); // true
console.log(pq.values[1].priority === 3); // true
console.log(pq.values[1].value === "First"); // true
console.log(pq.values[0].value === "Second"); // true

pq.enqueue("Third", 1);

console.log(pq.values.length === 3); // true
console.log(pq.values[0].priority === 1); // true
console.log(pq.values[1].priority === 3); // true
console.log(pq.values[2].priority === 2); // true
console.log(pq.values[0].value === "Third"); // true
console.log(pq.values[1].value === "First"); // true
console.log(pq.values[2].value === "Second"); // true

pq.enqueue("Fourth", 0);

console.log(pq.values.length === 4); // true
console.log(pq.values[0].priority === 0); // true
console.log(pq.values[1].priority === 1); // true
console.log(pq.values[2].priority === 2); // true
console.log(pq.values[3].priority === 3); // true
console.log(pq.values[0].value === "Fourth"); // true
console.log(pq.values[1].value === "Third"); // true
console.log(pq.values[2].value === "Second"); // true
console.log(pq.values[3].value === "First"); // true

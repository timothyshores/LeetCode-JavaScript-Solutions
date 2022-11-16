class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(insertedValue) {
		// Push value to the end of values array
		this.values.push(insertedValue);

		// Get the index of the new value pushed into the values array
		let childIndex = this.values.length - 1;

		// Get index of the parent of the new value pushed into the array
		let parentIndex = Math.floor((childIndex - 1) / 2);

		// Get value of the parent of the new value pushed into the array
		let parentNodeValue = this.values[parentIndex];

		// If parent node's value is less than the newly inserted value then bubble up
		while (parentNodeValue < insertedValue) {
			// Swap parent and child nodes in values array
			[this.values[childIndex], this.values[parentIndex]] = [
				this.values[parentIndex],
				this.values[childIndex],
			];

			// Update child node to the current parent node index
			childIndex = parentIndex;

			// Use formula to update new parent node index
			parentIndex = Math.floor((childIndex - 1) / 2);

			// Update parentNodeValue variable to determine if loop should repeat
			parentNodeValue = this.values[parentIndex];
		}

		return this.values;
	}
}

const heap = new MaxBinaryHeap();

console.log(heap.insert(41)); // [41]
console.log(heap.insert(39)); // [41, 39]
console.log(heap.insert(33)); // [41, 39, 33]
console.log(heap.insert(18)); // [41, 39, 33, 18]
console.log(heap.insert(27)); // [41, 39, 33, 18, 27]
console.log(heap.insert(12)); // [41, 39, 33, 18, 27, 12]
console.log(heap.insert(55)); // [55, 39, 41, 18, 27, 12, 33]

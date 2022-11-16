class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(insertedValue) {
		const val = this.values;

		// Push value to the end of values array
		val.push(insertedValue);

		// Get the index of the new value pushed into the values array
		let childIndex = val.length - 1;

		// Get index of the parent of the new value pushed into the array
		let parentIndex = Math.floor((childIndex - 1) / 2);

		// Get value of the parent of the new value pushed into the array
		let parentNodeValue = val[parentIndex];

		// If parent node's value is less than the newly inserted value then bubble up
		while (parentNodeValue < insertedValue) {
			// Swap parent and child nodes in values array
			[val[childIndex], val[parentIndex]] = [val[parentIndex], val[childIndex]];

			// Update child node to the current parent node index
			childIndex = parentIndex;

			// Use formula to update new parent node index
			parentIndex = Math.floor((childIndex - 1) / 2);

			// Update parentNodeValue variable to determine if loop should repeat
			parentNodeValue = val[parentIndex];
		}

		return val;
	}
}

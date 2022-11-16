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
    
    extractMax() {
        // Swap the first and last element in this.values;
            // Remove the root which is the max value
            // Replace the root with the value element in this.values
        // Call .pop() on this.values to return the last element or the node with the largest value in the BMH

        // Check the root node's left and right child
            // Parent index is 0
        // Find the max value between the two child nodes
            // Left child index is parent index * 2 + 1 && less than this.values.length
            // Right child index is parent index * 2 + 2 && less than this.values.length
            // If the left child node's value is greater than the right child node's value
                // Swap the root with the left child node
        // Same thing for the right child node
            // If the right child node's value is greater than the left child node's value
                // Swap the root with the right child node
        // Continue swapping the last node that was bubbled up to the top until it's in the right spot
        // The correct location for the bubbled up node is when it's value is less than it's parent node's value
            // Another way to phrase this is when the parent node's value is greater than the child node's value
        // Return the root
    }
}

class MaxBinaryHeap {
	constructor() {
		this.values = [];
	}

	insert(insertedValue) {
		// Add variable val for better readability than this.values
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
			this.swap(childIndex, parentIndex);

			// Update child node to the current parent node index
			childIndex = parentIndex;

			// Use formula to update new parent node index
			parentIndex = Math.floor((childIndex - 1) / 2);

			// Update parentNodeValue variable to determine if loop should repeat
			parentNodeValue = val[parentIndex];
		}

		return val;
	}

	swap(index1, index2) {
		[
			([this.values[index1], this.values[index2]] = [
				this.values[index2],
				this.values[index1],
			]),
		];
	}

	extractMax() {
		// Add variable val for better readability than this.values
		const val = this.values;

		// Handle edge cases where this.values is either empty or one element
		if (val.length === 0) return;
		if (val.length === 1) return val.pop();

		// Swap the first and last element in this.values;
		this.swap(0, val.length - 1);

		// Call .pop() on this.values to return the last element or the node with the largest value in the BMH
		const maxValue = this.values.pop();

		// Parent index is 0 which is the new root node after the swap
		let parentIndex = 0;
		const parentValue = val[0];

		// Left child index is parent index * 2 + 1 && less than this.values.length
		const getLeftChildIndex = (index) => {
			if (index * 2 + 1 < val.length) return index * 2 + 1;
			return null;
		};

		// Call getLeftChildIndex with the parent index and create variable for left child value
		let leftChildIndex = getLeftChildIndex(parentIndex);
		let leftChildValue = val[leftChildIndex];

		// Right child index is parent index * 2 + 2 && less than this.values.length
		const getRightChildIndex = (index) => {
			if (index * 2 + 2 < val.length) return index * 2 + 2;
			return null;
		};

		// Call getRightChildIndex with the parent index and create variable for right child value
		let rightChildIndex = getRightChildIndex(parentIndex);
		let rightChildValue = val[rightChildIndex];

		// Return the larger of the two values either left child value or right child value
		const getLargestChildValue = () =>
			leftChildValue > rightChildValue ? leftChildValue : rightChildValue;

		// Call getLargestChildValue()
		let largestChildValue = getLargestChildValue();

		// Continue to loop as long as the new root new is less than either its left or right child node's value
		while (parentValue < largestChildValue) {
			// If the left child's value is greater than the parent value and the right child value
			if (leftChildValue > parentValue && leftChildValue > rightChildValue) {
				// Swap parent node with left child node and update parent index
				this.swap(parentIndex, leftChildIndex);
				parentIndex = leftChildIndex;
			}
			// If the right child's value is greater than the parent value and the left child value
			if (rightChildValue > parentValue && rightChildValue > leftChildValue) {
				// Swap parent node with right child node and update parent index
				this.swap(parentIndex, rightChildIndex);
				parentIndex = rightChildIndex;
			}

			// Recalculate new left and right child indexes by calling the approbate helper function
			leftChildIndex = getLeftChildIndex(parentIndex);
			rightChildIndex = getRightChildIndex(parentIndex);

			// Set new left and right child values
			leftChildValue = val[leftChildIndex];
			rightChildValue = val[rightChildIndex];

			// Set largest child by calling getLargestChildValue helper function
			largestChildValue = getLargestChildValue();
		}

		// Return the root
		return maxValue;
	}
}

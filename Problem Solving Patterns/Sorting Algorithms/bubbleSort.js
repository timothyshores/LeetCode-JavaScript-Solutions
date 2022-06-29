const bubbleSort = (arr) => {
	for (let i = arr.length; i > 0; i--) {
		let swapsCount = 0;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				swapsCount++;
			}
		}
		if (swapsCount === 0) break;
	}

	return arr;
};

console.log(bubbleSort([1]));
console.log(bubbleSort([1, 2]));
console.log(bubbleSort([2, 1]));
console.log(bubbleSort([3, 2, 1]));
console.log(bubbleSort([2, 1, 4, 3]));
console.log(bubbleSort([5, 1, 2, 3, 4]));

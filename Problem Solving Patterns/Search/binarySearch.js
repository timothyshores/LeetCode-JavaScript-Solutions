const binarySearch = (arr, searchValue) => {
	let lower = 0;
	let upper = arr.length - 1;
	let middle = Math.floor((lower + upper) / 2);

	while (lower <= upper) {
		let middleElement = arr[middle];
		if (middleElement === searchValue) return middle;
		if (searchValue > middleElement) lower = middle++;
		if (searchValue < middleElement) upper = middle--;
		middle = Math.floor((lower + upper) / 2);
	}

	return -1;
};

// Test Cases all return true
console.log(binarySearch([1], 1) === 0);
console.log(binarySearch([1], 0) === -1);
console.log(binarySearch([1, 2], 1) === 0);
console.log(binarySearch([1, 2], 2) === 1);
console.log(binarySearch([1, 2], 3) === -1);
console.log(binarySearch(["a"], "a") === 0);
console.log(binarySearch(["a"], "b") === -1);
console.log(binarySearch([1, 2, 3], 1) === 0);
console.log(binarySearch([1, 2, 3], 2) === 1);
console.log(binarySearch([1, 2, 3], 3) === 2);
console.log(binarySearch([1, 2, 3], 4) === -1);
console.log(binarySearch(["a", "b"], "a") === 0);
console.log(binarySearch(["a", "b"], "b") === 1);
console.log(binarySearch(["a", "b"], "c") === -1);
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 2) === 0);
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 5) === 1);
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 6) === 2);
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 9) === 3);
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 13) === 4);
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15) === 5);
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28) === 6);
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 30) === 7);
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 31) === -1);
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 1) === -1);

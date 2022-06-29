const selectionSort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) min = j;
		}
		if (min !== i) [arr[i], arr[min]] = [arr[min], arr[i]];
	}

	return arr;
};

console.log(selectionSort([1]));
console.log(selectionSort([1, 2]));
console.log(selectionSort([2, 1]));
console.log(selectionSort([3, 2, 1]));
console.log(selectionSort([2, 1, 4, 3]));
console.log(selectionSort([5, 1, 2, 3, 4]));

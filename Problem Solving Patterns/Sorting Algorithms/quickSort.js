const pivotHelper = (arr, start = 0, end = arr.length - 1) => {
	let pivotIndex = start;
	let pivotValue = arr[start];

	for (let i = start + 1; i < end; i++) {
		if (arr[i] < pivotValue) {
			pivotIndex++;
			[[arr[i]], [arr[pivotIndex]]] = [[arr[pivotIndex]], [arr[i]]];
		}
	}

	[arr[pivotIndex], [arr[start]]] = [arr[start], [arr[pivotIndex]]];
	return pivotIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
	if (left < right) {
		let pivotIndex = pivotHelper(arr, left, right);
		quickSort(arr, left, pivotIndex - 1);
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
};

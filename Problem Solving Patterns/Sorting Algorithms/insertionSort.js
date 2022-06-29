const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i - 1; j >= 0 && arr[j] > arr[i]; j--) {
			if (arr[j] > arr[i]) {
				arr[j + 1] = arr[j];
			}
		}
		arr[j + 1] = currentValue;
	}

	return arr;
};

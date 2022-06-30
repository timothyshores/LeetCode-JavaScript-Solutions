const mergeArrays = (arr1, arr2) => {
	const merged = [];
	let [index1, index2] = [0, 0];

	while (index1 < arr1.length && index2 < arr2.length) {
		if (arr1[index1] <= arr2[index2]) {
			merged.push(arr1[index1]);
			index1++;
		} else {
			merged.push(arr2[index2]);
			index2++;
		}
	}

	merged.push(...arr1.slice(index1), ...arr2.slice(index2));

	return merged;
};

const mergeSort = (arr) => {
	if (arr.length <= 1) return arr;

	let midpoint = Math.floor(arr.length / 2);
	let leftArr = mergeSort(arr.slice(0, midpoint));
	let rightArr = mergeSort(arr.slice(midpoint));

	return mergeArrays(leftArr, rightArr);
};

console.log(mergeSort([2, 6, 1, 4, 3, 5, 7]));

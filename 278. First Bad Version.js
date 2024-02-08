/*

278. First Bad Version

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.


Example 1:

    Input: n = 5, bad = 4
    Output: 4

    Explanation:
    call isBadVersion(3) -> false
    call isBadVersion(5) -> true
    call isBadVersion(4) -> true
    Then 4 is the first bad version.

Example 2:
    Input: n = 1, bad = 1
    Output: 1

Constraints:
    1 <= bad <= n <= 231 - 1

*/

const recursiveBinarySearch = (n, isBadVersion, low = 1, high = n) => {
	// Base case
	if (low === high) return low;

	const middle = Math.floor((low + high) / 2);

	// Recursive cases
	return isBadVersion(middle)
		? binarySearch(n, isBadVersion, low, middle)
		: binarySearch(n, isBadVersion, middle + 1, high);
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution1 = (isBadVersion) => {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return (n) => recursiveBinarySearch(n, isBadVersion);
};

const iterativeBinarySearch = (n, isBadVersion) => {
	let low = 1;
	let high = n;

	while (low < high) {
		const middle = Math.floor((low + high) / 2);

		if (isBadVersion(middle)) {
			high = middle;
		} else {
			low = middle + 1;
		}
	}

	return low;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution2 = (isBadVersion) => {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return (n) => iterativeBinarySearch(n, isBadVersion);
};

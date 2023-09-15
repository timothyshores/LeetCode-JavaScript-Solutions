/*

54. Spiral Matrix

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

Example 2:
Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Constraints:
- m == matrix.length
- n == matrix[i].length
- 1 <= m, n <= 10
- -100 <= matrix[i][j] <= 100

*/

/**
 * Traverses the matrix from left to right and appends elements to the result array.
 * @param {number[][]} matrix - The input matrix.
 * @param {number} top - The top boundary.
 * @param {number} left - The left boundary.
 * @param {number} right - The right boundary.
 * @param {number[]} result - The result array to store the elements.
 */
const traverseLeftToRight = (matrix, top, left, right, result) => {
	for (let i = left; i <= right; i++) {
		result.push(matrix[top][i]);
	}
};

/**
 * Traverses the matrix from top to bottom and appends elements to the result array.
 * @param {number[][]} matrix - The input matrix.
 * @param {number} top - The top boundary.
 * @param {number} bottom - The bottom boundary.
 * @param {number} right - The right boundary.
 * @param {number[]} result - The result array to store the elements.
 */
const traverseTopToBottom = (matrix, top, bottom, right, result) => {
	for (let i = top; i <= bottom; i++) {
		result.push(matrix[i][right]);
	}
};

/**
 * Traverses the matrix from right to left and appends elements to the result array.
 * @param {number[][]} matrix - The input matrix.
 * @param {number} bottom - The bottom boundary.
 * @param {number} left - The left boundary.
 * @param {number} right - The right boundary.
 * @param {number[]} result - The result array to store the elements.
 */
const traverseRightToLeft = (matrix, bottom, left, right, result) => {
	for (let i = right; i >= left; i--) {
		result.push(matrix[bottom][i]);
	}
};

/**
 * Traverses the matrix from bottom to top and appends elements to the result array.
 * @param {number[][]} matrix - The input matrix.
 * @param {number} top - The top boundary.
 * @param {number} bottom - The bottom boundary.
 * @param {number} left - The left boundary.
 * @param {number[]} result - The result array to store the elements.
 */
const traverseBottomToTop = (matrix, top, bottom, left, result) => {
	for (let i = bottom; i >= top; i--) {
		result.push(matrix[i][left]);
	}
};

/**
 * Returns a clockwise spiral order traversal of the input matrix.
 * @param {number[][]} matrix - The input matrix.
 * @returns {number[]} - A clockwise spiral order traversal of the matrix.
 */
const spiralOrder = (matrix) => {
	if (!matrix.length) return [];

	const result = [];
	const numRows = matrix.length;
	const numColumns = matrix[0].length;
	let topBoundary = 0,
		bottomBoundary = numRows - 1,
		leftBoundary = 0,
		rightBoundary = numColumns - 1;

	while (result.length < numRows * numColumns) {
		traverseLeftToRight(
			matrix,
			topBoundary,
			leftBoundary,
			rightBoundary,
			result
		);
		topBoundary++;
		traverseTopToBottom(
			matrix,
			topBoundary,
			bottomBoundary,
			rightBoundary,
			result
		);
		rightBoundary--;

		if (result.length < numRows * numColumns) {
			traverseRightToLeft(
				matrix,
				bottomBoundary,
				leftBoundary,
				rightBoundary,
				result
			);
			bottomBoundary--;
		}

		if (result.length < numRows * numColumns) {
			traverseBottomToTop(
				matrix,
				topBoundary,
				bottomBoundary,
				leftBoundary,
				result
			);
			leftBoundary++;
		}
	}

	return result;
};

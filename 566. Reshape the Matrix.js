/*

566. Reshape the Matrix

In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:
    Input: mat = [[1,2],[3,4]], r = 1, c = 4
    Output: [[1,2,3,4]]

Example 2:
    Input: mat = [[1,2],[3,4]], r = 2, c = 4
    Output: [[1,2],[3,4]]

Constraints:
    m == mat.length
    n == mat[i].length
    1 <= m, n <= 100
    -1000 <= mat[i][j] <= 1000
    1 <= r, c <= 300

*/

/*

🔎 EXPLORE
What are some other insightful & revealing test cases?
 
Input mat is an array of arrays
- Each subarray represents a row
- The elements in a the subarray are values

Input r represents numbers of rows in the output array
Input c represents number of columns in the output array

🧠 BRAINSTORM
What approaches could work?
Algorithm 1: Create a new array and fill with the input values
Time: O(N) to traverse the original input array
Space: O(N) to store the new final results array

📆 PLAN
Outline of algorithm #: 

Need to verify that inputs r and c are valid requests

A valid request must have an equal number of elements in both the input array mat and output array

Need to compare the number of elements in both the input and output 2D arrays

const inputLength = mat.reduce((a, b) => a + b.length, 0);

if (inputLength !== r * c) return mat

Create a m x n matrix

const result = Array(m).fill().map(() =>Array(n).fill())

Traverse the input array keeping track of the current row and column

let row = 0;
let column = 0;

for (const subarray of mat) {
    for (const element of subarray) {
        // const represents every element in 
        result[r][c] = element
        column++;
        if (column === r) {
            column = 0;
            row++;
        }
    }
}

return result;

🛠️ IMPLEMENT
Write your algorithm */

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = (mat, r, c) => {};

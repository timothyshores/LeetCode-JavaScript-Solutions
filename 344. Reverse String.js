/*

344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s. 
You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
    Input: s = ["h","e","l","l","o"]
    Output: ["o","l","l","e","h"]

Example 2:
    Input: s = ["H","a","n","n","a","h"]
    Output: ["h","a","n","n","a","H"]

Constraints:
    1 <= s.length <= 105
    s[i] is a printable ascii character.

*/

/**
 * @param {string} str
 * @param {number} p1
 * @param {number} p2
 * @return {string}
 */
const swapChars = (str, p1, p2) => {
	[str[p1], str[p2]] = [str[p2], str[p1]];
	return str;
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
	let left = 0;
	let right = s.length - 1;

	while (left < right) {
		s = swapChars(s, left, right);
		left++;
		right--;
	}

	return s;
};

/*

Given a string s, find the first non - repeating character in it and return its index.If it does not exist, return -1.

Example 1:
    Input: s = "leetcode"
    Output: 0

Example 2:
    Input: s = "loveleetcode"
    Output: 2

Example 3:
    Input: s = "aabb"
    Output: -1

Constraints:
    1 <= s.length <= 105
    s consists of only lowercase English letters.

*/

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = (s) => {
	// Use built in JS object to store character frequency counter
	const charCount = {};

	// Iterate through each character in string s
	for (const char of s) {
		// Set key as the current character and value to it's frequency count in s
		charCount[char] = (charCount[char] || 0) + 1;
	}

	// Iterate through each character in string s again
	for (let i = 0; i < s.length; i++) {
		// If the current character is unique return the current index
		if (charCount[s[i]] === 1) return i;
	}

	// If no characters in s are unique return -1
	return -1;
};

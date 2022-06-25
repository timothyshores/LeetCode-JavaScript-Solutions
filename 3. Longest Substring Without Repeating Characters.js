// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:
// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} str
 * @return {number}
 */
const lengthOfLongestSubstring = (str) => {
	let set = new Set();
	let [left, right, max] = [0, 0, 0];

	// Loop through str one time. Linear O(n) time complexity
	while (right < str.length) {
		// Add variable names for readability
		let leftChar = str[left];
		let rightChar = str[right];

		// If right character is NOT in the set
		if (!set.has(rightChar)) {
			// Add rightChar to the set
			set.add(rightChar);
			// Update max if the current set size is larger then max size
			if (set.size > max) max = set.size;
			// Move right pointer one index to the right
			right++;
		} else {
			// Right character is in the set, remove left character from the set
			set.delete(leftChar);
			// Move left pointer one index to the right
			left++;
		}
	}

	return max;
};

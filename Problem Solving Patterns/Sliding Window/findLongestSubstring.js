// Write a function called longest substring
// Accepts a string of letters
// Returns the length of the longest substring with all distinct characters

/**
 * @param {string} s
 * @return {number}
 */
const findLongestSubstring = (str) => {
	let left = 0;
	let right = 0;
	let set = new Set(); // use a set to keep track of the letters in the current window
	let maxSubstringLength = 0;

	while (right < str.length) {
		let rightChar = str[right];
		if (!set.has(rightChar)) {
			set.add(rightChar);
			maxSubstringLength = Math.max(maxSubstringLength, set.size);
			right++;
		} else {
			set.delete(str[left]);
			left++;
		}
	}

	return maxSubstringLength;
};

// Test Cases should all return true
console.log(findLongestSubstring("") === 0);
console.log(findLongestSubstring("bbbbbb") === 1);
console.log(findLongestSubstring("rithmschool") === 7);
console.log(findLongestSubstring("thisisawesome") === 6);
console.log(findLongestSubstring("thecatinthehat") === 7);
console.log(findLongestSubstring("thisishowwedoit") === 6);
console.log(findLongestSubstring("longestsubstring") === 8);

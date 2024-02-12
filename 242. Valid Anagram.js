/*

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
    Input: s = "anagram", t = "nagaram"
    Output: true

Example 2:
    Input: s = "rat", t = "car"
    Output: false

Constraints:
    1 <= s.length, t.length <= 5 * 104
    s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

*/


/* 

Approach 1: Frequency counter pattern
Time: O(N) to iterate through str1 & str 2
Space: O(m) where m = str1.length to store the frequency count of each char in str1 into a JS obj

*/
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const isAnagram = (str1, str2) => {
	// Store the frequency count of each character in an object
	const count = {};

	// Handle the condition where strings are different lengths
	if (str1.length != str2.length) return false;

	// Set count object keys to the unique characters and set values to the frequency count in str1
	for (char of str1) {
		count[char] = (count[char] || 0) + 1;
	}

	// Iterate through the characters in str2
	for (char of str2) {
		// If the key is found in count and the value is greater than 0
		if (count[char] > 0) {
			// Reduce the frequency count by 1 for the given characters
			count[char] = count[char] - 1;
		} else {
			// The key was not found or the count is negative and return false
			return false;
		}
	}

	// Sum all of the values in count, if the sum is 0 then str1 and str2 are anagrams
	return Object.values(count).reduce((a, b) => a + b, 0) == 0;
};

/* 

Approach 2: Split each string into an array and then sort each array using built it String.sort() method and compare
Time: O(N log N) to sort each string by character
Space: O(N) technically 2N to store string arrays sorted by character

*/
/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
const isAnagramUsingSort = (str1, str2) => {
    const sortedStr1 = str1.split("").sort();
    const sortedStr2 = str2.split("").sort();
    return JSON.stringify(sortedStr1) === JSON.stringify(sortedStr2);
}

/*

49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:
    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
    Input: strs = [""]
    Output: [[""]]

Example 3:
    Input: strs = ["a"]
    Output: [["a"]]

Constraints:
    1 <= strs.length <= 104
    0 <= strs[i].length <= 100
    strs[i] consists of lowercase English letters.

*/

/**
 * Convert frequency counter object into sorted string
 * @param {object} obj
 * @return {string}
 */
const createStringFromObj = (obj) => {
	return Object.keys(obj)
		.sort()
		.map((key) => `${key}${obj[key]}`)
		.join('');
};

/**
 * Convert string into a hash using frequency counter pattern and sort
 * @param {string} str
 * @return {string}
 */
const hashStr = (str) => {
	const frequencyCounter = {};

	for (const char of str) {
		frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
	}

	return createStringFromObj(frequencyCounter);
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
	const results = {};

	for (const str of strs) {
		const key = hashStr(str);
		results[key] = results[key] || [];
		results[key].push(str);
	}

	return Object.values(results);
};

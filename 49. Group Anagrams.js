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

const encodeWord = (word) => {
  const charCount = new Array(26).fill(0);

  for (const char of word) {
    charCount[char.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  return charCount.join(",");
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (words) => {
  const anagramMap = {};

  for (const word of words) {
    const encodedWord = encodeWord(word);
    anagramMap[encodedWord] = anagramMap[encodedWord] || [];
    anagramMap[encodedWord].push(word);
  }

  return Object.values(anagramMap);
};

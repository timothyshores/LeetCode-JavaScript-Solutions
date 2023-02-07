/*

345. Reverse Vowels of a String

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:
    Input: s = "hello"
    Output: "holle"

Example 2:
    Input: s = "leetcode"
    Output: "leotcede"

Constraints:
    1 <= s.length <= 3 * 105
    s consist of printable ASCII characters.

*/

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = (s) => {
	// Store vowels in string s in order
	const vowelsInS = [];

	// Store valid vowels in a set
	const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

	// Add vowels in order to vowelsInSArray
	for (char of s) {
		// if current character is a vowel add to vowelsInSArray
		if (vowels.has(char)) vowelsInS.push(char);
	}

	// Create new string stringWithReversedVowels to store final string
	let stringWithReversedVowels = "";

	// Loop through input string s
	for (char of s) {
		// If char is a consonant add consonant to final string
		// If char is a vowel, add last element in vowelsInS array to final string and remove from vowelsInS
		stringWithReversedVowels += vowels.has(char) ? vowelsInS.pop() : char;
	}

	return stringWithReversedVowels;
};

/*

187. Repeated DNA Sequences

The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

Example 1:
    Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
    Output: ["AAAAACCCCC","CCCCCAAAAA"]

Example 2:
    Input: s = "AAAAAAAAAAAAA"
    Output: ["AAAAAAAAAA"]

Constraints:
    1 <= s.length <= 105
    s[i] is either 'A', 'C', 'G', or 'T'.

ENGINEERING METHOD

EXPLORE

Want to return the unique 10 letter long substrings that occur 2 or more times in input string s

BRAINSTORM

Approach 1: Brute force nested for loops
Time: O(n^2)
Space: O(k) where k is the length of the output or results array

Aproach 2: Use 2 sets
Time: O(N)
Space: O(N) if every 10 letter sequence is unique stored in set

PLAN

Aproach #2

Initialize 2 empty sets
    - allSequences
        - Store 10 letter long strings in this set
        - Check if the current 10 letter long sequence has the same sequence in this set
    - duplicateSequences 
        - Store all unique 10-letter-long sequences (substrings) that occur more than once in a DNA molecule

const allSequences = new Set();
const duplicateSequences = new Set();

// Handle edge case where s is 10 letters long or less
if (s.length <= 10) return [];

for (let i = 0; i < s.length - 9; i++) {
    // Get the current 10-letter-long sequence starting at index i
    const currentSequence = s.substring(i, i + 10);

    // Check if our all sequences set has the current sequence
    if (allSequences.has(currentSequence)) {
        // currentSequence is a duplicate and occures more than once
        duplicateSequences.add(currentSequence);
    } else {
        // currentSequence is unique. Add to our all sequences set
        allSequences.add(currentSequence)
    }
}

// Convert the duplicateSequences set into an arry and return the array
return [...duplicateSequences];

IMPLEMENT

*/

/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = (s) => {
	// Store all 10-letter-long sequences in input string s
	const allSequences = new Set();

	// Store 10-letter-long sequences that occur more than once in input string s
	const duplicateSequences = new Set();

	// Handle edge case where s is 10 letters long or less
	if (s.length <= 10) return [];

	// Iterate through input string s
	for (let i = 0; i < s.length - 9; i++) {
		// Get the current 10-letter-long sequence starting at index i
		const currentSequence = s.substring(i, i + 10);

		// Check if our all sequences set has the current sequence
		if (allSequences.has(currentSequence)) {
			// currentSequence is a duplicate and occures more than once
			duplicateSequences.add(currentSequence);
		} else {
			// currentSequence is unique. Add to our all sequences set
			allSequences.add(currentSequence);
		}
	}

	// Convert the duplicateSequences set into an arry and return the array
	return [...duplicateSequences];
};

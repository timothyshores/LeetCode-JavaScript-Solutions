// 771. Jewels and Stones

// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

// Example 1:
// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Example 2:
// Input: J = "z", S = "ZZ"
// Output: 0

// Note:
// S and J will consist of letters and have length at most 50.
// The characters in J are distinct.

var numJewelsInStonesSolution1 = function(J, S) {
	let jewels = 0;

	for (const jewel of J) {
		jewels += S.split(jewel).length - 1;
	}

	return jewels;
};

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
const numJewelsInStonesSolution2 = (jewels, stones) => {
    // Spread jewels string into an array and convert to a set
    const jewelsSet = new Set([...jewels])

    // Spread stones string into an array, only keep stones in jewelsSet and return filtered array length 
    return [...stones].filter(stone => jewelsSet.has(stone)).length;
};
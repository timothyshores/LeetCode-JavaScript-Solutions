// There are n rings and each ring is either red, green, or blue. The rings are distributed across ten rods labeled from 0 to 9.

// You are given a string rings of length 2n that describes the n rings that are placed onto the rods. Every two characters in rings forms a color-position pair that is used to describe each ring where:

// The first character of the ith pair denotes the ith ring's color ('R', 'G', 'B').
// The second character of the ith pair denotes the rod that the ith ring is placed on ('0' to '9').
// For example, "R3G2B1" describes n == 3 rings: a red ring placed onto the rod labeled 3, a green ring placed onto the rod labeled 2, and a blue ring placed onto the rod labeled 1.

// Return the number of rods that have all three colors of rings on them.

// Example 1:

// Input: rings = "B0B6G0R6R0R6G9"
// Output: 1
// Explanation:
// - The rod labeled 0 holds 3 rings with all colors: red, green, and blue.
// - The rod labeled 6 holds 3 rings, but it only has red and blue.
// - The rod labeled 9 holds only a green ring.
// Thus, the number of rods with all three colors is 1.
// Example 2:

// Input: rings = "B0R0G0R9R0B0G0"
// Output: 1
// Explanation:
// - The rod labeled 0 holds 6 rings with all colors: red, green, and blue.
// - The rod labeled 9 holds only a red ring.
// Thus, the number of rods with all three colors is 1.
// Example 3:

// Input: rings = "G4"
// Output: 0
// Explanation:
// Only one ring is given. Thus, no rods have all three colors.

// Constraints:

// rings.length == 2 * n
// 1 <= n <= 100
// rings[i] where i is even is either 'R', 'G', or 'B' (0-indexed).
// rings[i] where i is odd is a digit from '0' to '9' (0-indexed).

/**
 * @param {string} rings
 * @return {number}
 */

const countPoints = (rings) => {
	// Initial state of every ring
	const emptyRing = { red: false, green: false, blue: false };

	// Create array of 10 elements with the emptyRing obj
	const rods = Array(10).fill(emptyRing);

	// Split the input string rings into an array of 2 consecutive characters
	// E.g. "B0B6G0".match(/.{1,2}/g) returns ['B0', 'B6', 'G0']
	const pairings = rings.match(/.{1,2}/g);

	// Loop through pairings array
	for (let pairing of pairings) {
		// First character in every pairing string is the ring's color
		const color = pairing[0];
		// Second character in every pairing string is the position or index of the ring
		const rodIndex = pairing[1];

		// Set the correspond ring's color flag to true if found in the given pairing
		if (color === "R") rods[rodIndex] = { ...rods[rodIndex], red: true };
		if (color === "G") rods[rodIndex] = { ...rods[rodIndex], green: true };
		if (color === "B") rods[rodIndex] = { ...rods[rodIndex], blue: true };
	}

	// Initialize a final count of rods with all 3 colors of rings
	let count = 0;

	// Iterate through rods array
	for (rod of rods) {
		// If a given rood has 3 true values then increment the final count
		if (Object.values(rod).every((boolean) => boolean === true)) count++;
	}

	return count;
};

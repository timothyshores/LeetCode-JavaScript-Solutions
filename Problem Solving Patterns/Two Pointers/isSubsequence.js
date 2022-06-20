// Write a function called isSubsequence that receives two strings as arguments
// Determine if all characters from the first string form a subsequence of the characters in the second string
// Return true if all characters in the first string appear in the same order in the second string
// Ideal time complexity linear O(N) where N is the number of characters in the second string
// Ideal space complexity constant O(1)

const isSubsequence = (str1, str2) => {
	// If str1 is longer than str2 then str1 can NOT be a subsequence of str2
	if (str1.length > str2.length) return false;

	// Initialize and set two points and count to 0. Constant O(1) space complexity.
	let [firstPointer, secondPointer, count] = [0, 0, 0];

	// Loop through all characters in second string. Linear O(n) time complexity
	while (secondPointer < str2.length) {
		// If character in str1 at index firstPoint is equal to character in str2 at index secondPointer
		if (str1[firstPointer] === str2[secondPointer]) {
			// Move first pointer 1 index to the right and increment count
			[firstPointer++, count++];
		}
		// Move second pointer 1 index to the right
		secondPointer++;
	}

	return count === str1.length;
};

// Test Cases should all return true
console.log(isSubsequence("", "a") === true);
console.log(isSubsequence("b", "a") === false);
console.log(isSubsequence("a", "ab") === true);
console.log(isSubsequence("ab", "a") === false);
console.log(isSubsequence("ab", "ba") === false);
console.log(isSubsequence("ab", "abc") === true);
console.log(isSubsequence("abc", "xzyabc") === true);
console.log(isSubsequence("abc", "acb") === false);
console.log(isSubsequence("sing", "string") === true);
console.log(isSubsequence("hello", "hello world") === true);
console.log(isSubsequence("abc", "abracadabra") === true);

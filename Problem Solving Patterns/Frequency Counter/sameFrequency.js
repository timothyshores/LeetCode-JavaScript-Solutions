// Write a function called sameFrequency
// Given two positive integers
// Return true if both integers have the same frequency of digits
// Must have  linear O(n) time complexity

const sameFrequency = (num1, num2) => {
	// Handle scenario where num1 & num2 have a different number of digits
	if (num1.toString().length !== num2.toString().length) return false;

	// Convert both num1 and num2 to strings
	str1 = num1.toString().split("");
	str2 = num2.toString().split("");

	// Store the counts in an object
	count1 = {};
	count2 = {};

	// Set both count object's keys to the the digits and the values to the frequency count
	for (num of str1) {
		count1[num] = (count1[num] || 0) + 1;
	}

	for (num of str2) {
		count2[num] = (count2[num] || 0) + 1;
	}

	// Return true if both counts have the same key value pairs of digits and frequency count
	return Object.entries(count1).toString() == Object.entries(count2).toString();
};

console.log(sameFrequency(1, 1)); // returns true
console.log(sameFrequency(1, 2)); // returns false
console.log(sameFrequency(1, 11)); // returns false
console.log(sameFrequency(11, 1)); // returns false
console.log(sameFrequency(11, 11)); // returns true
console.log(sameFrequency(12, 21)); // returns true
console.log(sameFrequency(34, 14)); // returns false
console.log(sameFrequency(11, 111)); // returns false
console.log(sameFrequency(182, 281)); // returns true
console.log(sameFrequency(1423, 1243)); // returns true
console.log(sameFrequency(123456, 645231)); // returns true

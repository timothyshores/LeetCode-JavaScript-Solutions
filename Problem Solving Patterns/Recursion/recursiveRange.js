// Write a function called recursiveRange
// Input is a positive integer called num
// Output is the sum of all positive integers from 0 to num

const recursiveRange = (num) => {
	if (num === 0) return 0;
	return num + recursiveRange(num - 1);
};

console.log(recursiveRange(0));
console.log(recursiveRange(1));
console.log(recursiveRange(2));
console.log(recursiveRange(3));
console.log(recursiveRange(4));
console.log(recursiveRange(5));
console.log(recursiveRange(6));
console.log(recursiveRange(10));

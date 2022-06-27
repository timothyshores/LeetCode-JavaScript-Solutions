// Write a function called productOfArray
// Input is an array of numbers
// Return the product of multiplying all numbers together

const productOfArray = (arr) => {
	const firstElement = arr[0];
	const [, ...restOfArray] = arr;

	if (arr.length === 0) return 1;
	return firstElement * productOfArray(restOfArray);
};

// All Test Cases return true
console.log(productOfArray([1]) === 1);
console.log(productOfArray([1, 2]) === 2);
console.log(productOfArray([2, 2]) === 4);
console.log(productOfArray([1, 2, 3]) === 6);
console.log(productOfArray([1, 2, 3, 5]) === 30);
console.log(productOfArray([1, 2, 3, 4, 5]) === 120);
console.log(productOfArray([5, 4, 3, 2, 1]) === 120);

// Write a function called fibonacci
// Input is a positive integer n where n represents the nth number in the fibonacci sequence
// Return the nth number in the fibonacci sequence

const fibonacci = (n) => {
	if (n <= 2) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
};

console.log(fibonacci(1) === 1);
console.log(fibonacci(2) === 1);
console.log(fibonacci(3) === 2);
console.log(fibonacci(4) === 3);
console.log(fibonacci(5) === 5);
console.log(fibonacci(6) === 8);
console.log(fibonacci(10) === 55);
console.log(fibonacci(28) === 317811);
console.log(fibonacci(35) === 9227465);

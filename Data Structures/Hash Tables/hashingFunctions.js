// Create a function called hash the accepts two arguments. The first argument is called key which is a string and the second argument is called length which is the length of an array. The function should return an index between 0 and length - 1.

const basicHash = (key, length) => {
	let total = 0;

	for (let char of key) {
		total += char.charCodeAt(0);
	}

	return total % length;
};

console.log(basicHash("Hi", 100)); // 77
console.log(basicHash("Hello!", 100)); // 33
console.log(basicHash("Hello World", 5)); // 2
console.log(basicHash("Hello World", 10)); // 2
console.log(basicHash("Hello World!", 5)); // 0
console.log(basicHash("Hello World!", 10)); // 5

// Improve hash function by adding in a maximum loop length of 25 and multiple by the prime number 31 to reduce collisions

function improvedHash(key, length) {
	let total = 0;

	for (let i = 0; i < Math.min(key.length, 25); i++) {
		total += total * 31 + key[i].charCodeAt(0);
	}

	return total % length;
}

console.log(improvedHash("Hi", 100)); // 9
console.log(improvedHash("Hello!", 100)); // 1
console.log(improvedHash("Hello World", 5)); // 3
console.log(improvedHash("Hello World", 10)); // 8
console.log(improvedHash("Hello World!", 5)); // 1
console.log(improvedHash("Hello World!", 10)); // 6

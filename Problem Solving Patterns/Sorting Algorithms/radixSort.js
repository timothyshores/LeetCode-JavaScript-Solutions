const getDigit = (num, index) => {
	let str = num.toString();
	if (index >= str.length) return 0;
	let reversedStr = str.split("").reverse().join("");
	return parseInt(reversedStr[index], 10);
};

// All Test Cases return true
console.log(getDigit(12345, 0) === 5); // returns
console.log(getDigit(12345, 1) === 4); // returns
console.log(getDigit(12345, 2) === 3); // returns
console.log(getDigit(12345, 3) === 2); // returns
console.log(getDigit(12345, 4) === 1); // returns
console.log(getDigit(12345, 5) === 0); // returns

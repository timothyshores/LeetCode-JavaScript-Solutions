const getDigit = (num, index) => {
	let str = num.toString();
	if (index >= str.length) return 0;
	return parseInt(str[--str.length - index]);
};

// All Test Cases return true
console.log(getDigit(12345, 0) === 5);
console.log(getDigit(12345, 1) === 4);
console.log(getDigit(12345, 2) === 3);
console.log(getDigit(12345, 3) === 2);
console.log(getDigit(12345, 4) === 1);
console.log(getDigit(12345, 5) === 0);
console.log(getDigit(12345, 6) === 0);

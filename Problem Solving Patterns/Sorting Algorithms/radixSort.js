const getDigit = (num, index) => {
	let str = num.toString();
	if (index >= str.length) return 0;
	return parseInt(str[--str.length - index]);
};

const digitCount = (num) => num.toString().length;

const maxDigits = (nums) => {
	let maxDigit = digitCount(nums[0]);

	for (let num of nums) {
		if (maxDigit < digitCount(num)) maxDigit = digitCount(num);
	}

	return maxDigit;
};

const radixSort = (nums) => {
	for (let i = 0; i < maxDigits(nums); i++) {
		let digits = Array.from({ length: 10 }, () => []);
		for (let num of nums) {
			let digit = getDigit(num, i);
			digits[digit] = [...digits[digit], num];
		}
		nums = digits.flat();
	}

	return nums;
};

// All Test Cases return true
console.log(getDigit(12345, 0) === 5);
console.log(getDigit(12345, 1) === 4);
console.log(getDigit(12345, 2) === 3);
console.log(getDigit(12345, 3) === 2);
console.log(getDigit(12345, 4) === 1);
console.log(getDigit(12345, 5) === 0);
console.log(getDigit(12345, 6) === 0);

console.log(digitCount(0) === 1);
console.log(digitCount(1) === 1);
console.log(digitCount(10) === 2);
console.log(digitCount(100) === 3);
console.log(digitCount(1000) === 4);
console.log(digitCount(10000) === 5);
console.log(digitCount(100000) === 6);

console.log(maxDigits([1]) === 1);
console.log(maxDigits([1, 10]) === 2);
console.log(maxDigits([1, 10, 100]) === 3);
console.log(maxDigits([1, 10, 100, 1000]) === 4);
console.log(maxDigits([1, 10, 100, 1000, 10000]) === 5);
console.log(maxDigits([1, 10, 100, 1000, 10000, 100000]) === 6);

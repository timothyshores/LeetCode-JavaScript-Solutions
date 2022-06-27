const isPalindrome = (str) => {
	/**
	 * Returns str in reverse
	 * @param {string} str
	 * @return {string} str in reverse
	 */
	const reverseStr = (str) => {
		if (str.length === 1) return str;
		return str.slice(-1) + reverseStr(str.slice(0, -1));
	};

	return str === reverseStr(str);
};

console.log(isPalindrome("bob") === true);
console.log(isPalindrome("dad") === true);
console.log(isPalindrome("mom") === true);
console.log(isPalindrome("noon") === true);
console.log(isPalindrome("apple") === false);
console.log(isPalindrome("orange") === false);
console.log(isPalindrome("doctor") === false);
console.log(isPalindrome("lawyer") === false);
console.log(isPalindrome("engineer") === false);
console.log(isPalindrome("tacocat") === true);
console.log(isPalindrome("racecar") === true);

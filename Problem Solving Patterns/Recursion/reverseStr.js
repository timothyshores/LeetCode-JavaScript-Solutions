const reverseStr = (str) => {
	// Added variable names for readability
	const strIsASingleCharacter = str.length === 1;
	const lastCharacterInString = str.slice(-1);
	const strWithoutLastCharacter = str.slice(0, -1);

	// Base case is when str is a single character
	if (strIsASingleCharacter) return str;
	// General case is when str is 2 or more characters
	return lastCharacterInString + reverseStr(strWithoutLastCharacter);
};

/// All test cases return true
console.log(reverseStr("a") === "a");
console.log(reverseStr("ab") === "ba");
console.log(reverseStr("ba") === "ab");
console.log(reverseStr("abc") === "cba");
console.log(reverseStr("cba") === "abc");
console.log(reverseStr("tacocat") === "tacocat");
console.log(reverseStr("awesome") === "emosewa");
console.log(reverseStr("rithmschool") === "loohcsmhtir");

const stringSearch = (longStr, searchStr) => {
	let temp = "";
	let count = 0;

	for (let char of longStr) {
		if (char === searchStr[temp.length]) {
			temp += char;
			if (temp === searchStr) {
				temp = "";
				count++;
			}
		}
	}
	return count;
};

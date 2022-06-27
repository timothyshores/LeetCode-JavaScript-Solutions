const nestedEvenSum = (obj, sum = 0) => {
	// Iterate through obj values
	for (let value of Object.values(obj)) {
		// Create self described variables for readability
		const valueIsAnEvenNum = typeof value === "number" && value % 2 === 0;
		const valueIsAnObj = typeof value === "object";

		// Base case when value is an even number add to sum
		if (valueIsAnEvenNum) sum += value;

		// Value is an object pass in the nested object into nestedEvenSum and add the result to sum
		if (valueIsAnObj) sum += nestedEvenSum(value);
	}

	return sum;
};

console.log(
	nestedEvenSum({ 1: 1, 2: 2, 3: { 1: 1, 2: 2, 3: { 1: 1, 2: 2 } } })
);

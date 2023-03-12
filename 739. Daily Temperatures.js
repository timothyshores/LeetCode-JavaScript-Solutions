/*

739. Daily Temperatures

Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

Example 1:
    Input: temperatures = [73,74,75,71,69,72,76,73]
    Output: [1,1,4,2,1,1,0,0]

Example 2:
    Input: temperatures = [30,40,50,60]
    Output: [1,1,1,0]

Example 3:
    Input: temperatures = [30,60,90]
    Output: [1,1,0]

Constraints:
    1 <= temperatures.length <= 105
    30 <= temperatures[i] <= 100

*/

/*

EXPLORE
- Want to return a new array that's the same length or as a the input temperatures array
- The outputs results array is the number of days until it's a warmer day
- If it's the last day or every day in the future is always colder rather than warmer return 0

Example
dailyTemperatures([69, 70]); // [1, 0];
dailyTemperatures([72, 69]); // [0, 0];

BRAINSTORM

Approach 1: Two pointer

Time Complexity: O(N^2)
Space Complexity: O(1)

Approach 2: Monotonic Decreasing Stack

Time Complexity: O(N)
Space Complexity: O(N)

PLAN

Create a monotonic decreasing stack this will store and compare all daily temperatures
The stack will store a tuple of the the temperature and an index

Create a results array to return at the end of the function

Iterate through the temperatures input array
    Look at the first temperature, temperatures[0] and add the to monotonic stack
    Look at the second temperature, temperatures[1] 

    Compare the second temperature to the first temperature in the monotonic stack
    
    There's only three possibilities or scenarios comparing the first and second temperature
    The second temperature can either be lower, higher or the same as the first temperature

        If the second temperature is lower OR it is the same as the first temperature
            Add the second temperature to the stack and look at the third temperature
    
        Else the second temperature is HIGHER then the first temperature
            Pop off the first element and in the results array store a 1 in index 0

    Look at the third, fourth, fifth until we look at the temperatures.length - 1th temperature

Generalizations from earlier example comparing the first 2 elements

    The stack could store up to temperatures.length elements
    This means that all temperatures are decreasing
    E.g. 79, 77, 76, 64, 63, 61, 59
    Storing N elements in a stack means a worst case space complexity of O(N)
    
    Best case time complexity would be for an array that is constantly increasing
    E.g. 59, 61, 62, 63, 66, 69, 74, 75
    Ever element would pop off the previous element in the stack
    Best case space complexity O(1) to store 1 element in the stack

Could store up to temperatures.length elements in the stack if all temperatures were decreasing

- We could pop off up to temperatures.length - 1 elements in the stack if all temperatures were decreasing besides the last day was the hottest daily temperature
- If there are any elements remaining in our stack after we've viewed all temperatures

Return results

IMPLEMENT

*/

class Stack extends Array {
	peek() {
		return this[this.length - 1];
	}

	isEmpty() {
		return this.length === 0;
	}

	size() {
		return this.length;
	}
}

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
	// Create a results array the same size as the input temperatures array and fill with 0s
	const result = new Array(temperatures.length).fill(0);

	// Store the indices of the next hotter days in a monotonically decreasing stack
	const stack = new Stack();

	// Iterate through the input temperatures array in reverse
	for (let i = temperatures.length - 1; i >= 0; i--) {
		// Semantic variable name for the current temperature in backwards for loop
		const currentTemp = temperatures[i];

		// If our monotonic stack is NOT empty and the current temperature is higher then the top element in the stack
		while (stack.size() && currentTemp >= temperatures[stack.peek()])
			// Keep removing the top element from the stack using the pop() method
			stack.pop();

		// After while loop current temperature is now less then the top element in the stack
		// If our monotonic stack is NOT empty then set the ith element in result array to the index of the next
		if (stack.size()) result[i] = stack.peek() - i;

		// Add the current index to the top of the stack
		stack.push(i);
	}

	// Return results array
	return result;
};

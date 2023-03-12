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

IMPLEMENT

*/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {};

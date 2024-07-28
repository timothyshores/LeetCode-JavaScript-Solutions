/*

20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:
    Input: s = "()"
    Output: true

Example 2:
    Input: s = "()[]{}"
    Output: true

Example 3:
    Input: s = "(]"
    Output: false

Constraints:
    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.

*/



/** 
 * Initial solution using if statements
 * 
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
	const stack = [];

	for (const char of s) {
		if (char === "(" || char === "{" || char === "[") stack.push(char);
		if (char === ")" && stack.pop() !== "(") return false;
		if (char === "}" && stack.pop() !== "{") return false;
		if (char === "]" && stack.pop() !== "[") return false;
	}

	return stack.length === 0;
};

/**
 * Solution using map to match using a hash map to map opening with it's corresponding closing bracket 
 * 
 * @param {string} s
 * @return {boolean}
 */
const isValidMap = s => {
  // Keys are opening brackets and values are it's corresponding closing bracket
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];

  for (const bracket of s) {
    // if bracket is an opening bracket, push it's closing bracket to the stack
    if (bracket in map) stack.push(map[bracket]);
    // else pop from stack if it's not equal to the current closing bracket return false
    else if (stack.pop() !== bracket) return false;
  }

  return stack.length === 0;
};
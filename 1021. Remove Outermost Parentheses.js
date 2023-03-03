/*

1021. Remove Outermost Parentheses

A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.

Example 1:
    Input: s = "(()())(())"
    Output: "()()()"
    Explanation: 
    The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
    After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

Example 2:
    Input: s = "(()())(())(()(()))"
    Output: "()()()()(())"
    Explanation: 
    The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
    After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".

Example 3:
    Input: s = "()()"
    Output: ""
    Explanation: 
    The input string is "()()", with primitive decomposition "()" + "()".
    After removing outer parentheses of each part, this is "" + "" = "".

Constraints:
    1 <= s.length <= 105
    s[i] is either '(' or ')'.
    s is a valid parentheses string.

*/

/*

EXPLORE

We want to find balanced parentheses in a given input string s
We want to remove the outermost parentheses and then combined any results

Examples
removeOuterParentheses('()'); // ''
removeOuterParentheses('(())'); // '()'
removeOuterParentheses('(()())'); // '()()'
removeOuterParentheses('((()))'); // '(())'
removeOuterParentheses('(()()())'); // '()()()'
removeOuterParentheses('((()()))'); // '(()())'
removeOuterParentheses('((()()()))'); // '(()()())'

BRAINSTORM
Use iteration and either a counter or a stack

Approach 1: 
Use a counter
Add 1 to the count for opening parenthesis
Subtract 1 from the count for closing parenthesis
Add opening and closing parenthesis to the results string based on the count

Time complexity: O(N) where N is the number of elements in string s
Space complexity: O(N) to store the result string and count

Approach 2: 
Use a stack
Push to the stack if we encounter an opening parenthesis
Pop from the stack if we see a closing parenthesis
Add opening and closing parenthesis to the results string  based on the stack length

Time complexity: O(N) where N is the number of elements in string s
Space complexity: O(N) to store the result string and stack

*/

/**
 * @param {string} s
 * @return {string}
 */
const removeOuterParenthesesCounter = (s) => {
	let counter = 0;
	let result = "";

	for (const char of s) {
		if (char === ")") counter--;
		if (counter > 0) result += char;
		if (char === "(") counter++;
	}

	return result;
};

/**
 * @param {string} s
 * @return {string}
 */
const removeOuterParenthesesStack = (s) => {
	const stack = [];
	let result = "";

	for (const char of s) {
		if (char === "(") {
			result += stack.length ? char : "";
			stack.push(char);
		} else {
			stack.pop();
			result += stack.length ? char : "";
		}
	}

	return result;
};

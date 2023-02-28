/*

38. Count and Say

The count-and-say sequence is a sequence of digit strings defined by the recursive formula:

countAndSay(1) = "1"

countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.

To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

For example, the saying and conversion for digit string "3322251":

Given a positive integer n, return the nth term of the count-and-say sequence.

Example 1:
    Input: n = 1
    Output: "1"
    Explanation: This is the base case.

Example 2:

    Input: n = 4
    Output: "1211"
    Explanation:
    countAndSay(1) = "1"
    countAndSay(2) = say "1" = one 1 = "11"
    countAndSay(3) = say "11" = two 1's = "21"
    countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

Constraints:
    1 <= n <= 30

*/

/*

Problem Summary
    Need to compute from 1 up to n the count of a given number and the number itself
    The base case is countAndSay(1) = "1"

Walk through example
    For countAndSay(2) we need to look at countAndSay(n - 1) which is 1 in this example
    In countAndSay(1) there is one 1 so we return 11 for countAndSay(2)
    For countAndSay(3) we need to look at countAndSay(2) which is "11"
    The number 11 is made up of two 1s so we return "21"
    For countAndSay(4) we look at countAndSay(3) which is ""21""
    The number 21 is made up of one 2 and one 1 so we return "1211"
    For countAndSay(5) we look at "1211" which is three 1s and one 2 return 3112
    countAndSay(6) look at 3112 which is one 3, two ones and 1 2 and return 132112

Examples
    countAndSay(1) = "1"
    countAndSay(2) = say "1" = one 1 = "11"
    countAndSay(3) = say "11" = two 1's = "21"
    countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"

High Level Approach
    Need to check the previous answer of countAndSay(n - 1)
    If a number appears by itself we simply say 1 number
    For example for countAndSay(2) the previous response for countAndSay(1) is one 1

    Need to figure out the count of the current number and the number
    We can do this using two pointer approach
    The first poiner would be at index 0 and then other pointer would be at index 1
    If the values at index 0 and 1 then return one and what ever the value is at index 0
    If the values at index 0 and 1 are the same then 
        Create a count variable initialized to two since the first two characters are the same
        Increment the lead pointer and check if the character at index 2 is equal to character at index 0
        If they are then increment the lead pointer and increment the count
        If the lead pointer gets to index countAndSay(n-1).length then we reached the end of the previous string
        Return what ever the count is followed by the lag pointer 
    
*/

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = (n) => {
	const countAndSay = (n) => {
		// Base case
		if (n === 1) return "1";

		// Need to check the previous response from count and say 1
		const previousCountAndSay = countAndSay(n - 1);
		const previousCountAndSayLength = previousCountAndSay.length;

		// Create and initialize an empty results string, create lag and lead pointers set to 0 and 1 respectively
		let result = "";
		let lagIndex = 0;
		let leadIndex = 1;

		// Iterate through the previous reponse after calling
		while (lagIndex < previousCountAndSayLength) {
			// Store the lag and lead values and initialize current number count to 1
			let lagNumber = previousCountAndSay[lagIndex];
			let leadNumber = previousCountAndSay[leadIndex];
			let count = 1;

			// When the characters are different
			if (lagNumber !== leadNumber) {
				// Add the string '1' and the current number at lag index to results string
				result += "1" + lagNumber;
			}

			// When the same character appears two times in a row
			while (lagNumber === leadNumber) {
				// Move the lead pointer one index to the right
				leadIndex++;
				// Increment the count
				count++;
				// Update leadNumber
				leadNumber = previousCountAndSay[leadIndex];

				// When the lag pointer gets to a different number or reaches the end of the string
				if (
					lagNumber !== leadNumber ||
					leadIndex === previousCountAndSayLength
				) {
					// Add the current count as a string and the current number at lag index to results string
					result += count.toString() + lagNumber;
					break;
				}
			}

			// Move lag index to the current location of lead index
			lagIndex = leadIndex;
			// Set new leadIndex position to be
			leadIndex = lagIndex + 1;
		}

		return result;
	};
};

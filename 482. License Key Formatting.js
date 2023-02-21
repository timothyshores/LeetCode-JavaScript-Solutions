/*

482. License Key Formatting

You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. 
The string is separated into n + 1 groups by n dashes. You are also given an integer k.

We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. 

Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

Return the reformatted license key.

Example 1:
    Input: s = "5F3Z-2e-9-w", k = 4
    Output: "5F3Z-2E9W"
    Explanation: The string s has been split into two parts, each part has 4 characters.
    Note that the two extra dashes are not needed and can be removed.

Example 2:
    Input: s = "2-5g-3-J", k = 2
    Output: "2-5G-3J"
    Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.

Constraints:
    1 <= s.length <= 105
    s consists of English letters, digits, and dashes '-'.
    1 <= k <= 104

*/

/*

Background info
- String s is a license key only letters, numbers and dashs
- Integer k
- n number of dashs and n + 1 groups

Problem
- Want to reform string s into groups of k characters

Requirements
- Each group MUST contain exactly k characters except for the first group
- First group can be shorter than k characters but most contain at least 1 characters
- Need to have a dash between two groups
- All lowercase letters must be converted to uppervase

Subproblems

1. Need to clean up the input string 

Remove the dashes from string s using s = s.replace('-', '');
Convert all lowercase letters to uppercase letters using s = s.toUpperCase();

2. Need to figure out the length of the first group

Probably use the modulo operator

total alphanumberic characters % k
Ex 1: 8 % 2 === 0
Ex 2: 5 % 2 === 1

Make this first modulo operation an initial for loop then add + "-"

3. Need to add dashes between groups

Have a for loop from size of the first group until the end of string s
Add a dash follwed by the first k characters of string s

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const licenseKeyFormatting = (s, k) => {};

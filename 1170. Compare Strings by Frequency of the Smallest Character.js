/*

1170. Compare Strings by Frequency of the Smallest Character

Let the function f(s) be the frequency of the lexicographically smallest character in a non-empty string s. For example, if s = "dcce" then f(s) = 2 because the lexicographically smallest character is 'c', which has a frequency of 2.

You are given an array of strings words and another array of query strings queries. For each query queries[i], count the number of words in words such that f(queries[i]) < f(W) for each W in words.

Return an integer array answer, where each answer[i] is the answer to the ith query.

Example 1:
    Input: queries = ["cbd"], words = ["zaaaz"]
    Output: [1]
    Explanation: On the first query we have f("cbd") = 1, f("zaaaz") = 3 so f("cbd") < f("zaaaz").

Example 2:
    Input: queries = ["bbb","cc"], words = ["a","aa","aaa","aaaa"]
    Output: [1,2]
    Explanation: On the first query only f("bbb") < f("aaaa"). On the second query both f("aaa") and f("aaaa") are both > f("cc").

Constraints:
    1 <= queries.length <= 2000
    1 <= words.length <= 2000
    1 <= queries[i].length, words[i].length <= 10
    queries[i][j], words[i][j] consist of lowercase English letters.

*/

/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
const numSmallerByFrequency = (queries, words) => {
	/*

    Subproblem 1: 
    Create helper function that takes in a string and returns the count of frequency of the lexicographically smallest character

    Use a built in sorting method the string str
    Time complexity O(N log N) log linear time
    Space complexity O(1)
    Look at the first character
    Create a while loop
    Return the count of the first character in the sorted string 
    

    Subproblem 2: 
    Create a new array, store the count of the lexicographically smallest character in words array and sort in descending order

    Subproblem 3:
    Create an array that stores the number of words in words such that f(queries[i]) < f(W) for each W in words.

    Create an array called results
    Iterate through queries input array
    Call helper function to get the the count of the lexicographically smallest character
    Store this in a variable called queryCount
    Iterate through the wordsCount array using a while loop
    Count the number of elements in wordsCount that are greater than queryCount
    Push this count into the results array
    Return the results array 

    */
};

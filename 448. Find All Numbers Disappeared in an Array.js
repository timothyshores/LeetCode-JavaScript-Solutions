/*

448. Find All Numbers Disappeared in an Array

Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

Example 1:
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]

Example 2:
Input: nums = [1,1]
Output: [2]

Constraints:
    n == nums.length
    1 <= n <= 105
    1 <= nums[i] <= n

Follow up: Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

*/

/* 

Approach
    Create an empty results array
    Create a new set of the input nums array
    Loop from 1 to N
    If the current number is NOT in the set then push into results array
    Return the results array

Space time complexity
    Time: O(N) to create the set and iterate through the array
    Space: O(N) store nums in the set and the final results array

/*

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = (nums) => {};

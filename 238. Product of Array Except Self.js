/*

238. Product of Array Except Self

Hint: Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0] 

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer. 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)

*/

const getPrefixProduct = (arr) => {
  const n = arr.length;
  const result = new Array(n);
  result[0] = arr[0];

  for (let i = 1; i < n; i++) {
    result[i] = result[i - 1] * arr[i]
  }

  return result;
};

const getSuffixProduct = (arr) => {
  const n = arr.length;
  const result = new Array(n); // Preallocate the array with the required length
  result[n - 1] = arr[n - 1]; // Initialize the last element

  for (let i = n - 2; i >= 0; i--) {
    result[i] = result[i + 1] * arr[i];
  }

  return result;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const prefixProduct = getPrefixProduct(nums);
  const suffixProduct = getSuffixProduct(nums);

  const result = [];

  for (const num of nums) {
    result.push(); // TODO calculate current element
  }

  return result;
};

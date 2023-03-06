/*

108. Convert Sorted Array to Binary Search Tree

Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced binary search tree.

Example 1:
    Input: nums = [-10,-3,0,5,9]
    Output: [0,-3,9,-10,null,5]
    Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:
    Input: nums = [1,3]
    Output: [3,1]
    Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

Constraints:
    1 <= nums.length <= 104
    -104 <= nums[i] <= 104
    nums is sorted in a strictly increasing order.

*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = (nums) => {
	const createBST = (start, end) => {
		if (start > end) return null;

		const mid = Math.floor((start + end) / 2);
		const root = new TreeNode(nums[mid]);

		root.left = createBST(start, mid - 1);
		root.right = createBST(mid + 1, end);

		return root;
	};

	return createBST(0, nums.length - 1);
};

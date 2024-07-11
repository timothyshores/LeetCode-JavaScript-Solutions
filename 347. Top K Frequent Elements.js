/*

347. Top K Frequent Elements

Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.


Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]


Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  const numsMap = {};

  for (const num of nums) {
    numsMap[num] = (numsMap[num] || 0) + 1;
  }

  return Object.keys(numsMap)
    .sort((a, b) => numsMap[b] - numsMap[a])
    .slice(0, k);
};

// Revised solution in O(n) time complexity
const topKFrequentFollowUp = (nums, k) => {
  const frequencyCounter = createfrequencyCounter(nums);
  const frequencyBuckets = createFrequencyBuckets(frequencyCounter);
  const maxFreq = Math.max(...Object.values(frequencyCounter));
  return gatherTopKFrequent(frequencyBuckets, maxFreq, k);
};

const createfrequencyCounter = (nums) => {
  const frequencyCounter = {};
  for (const num of nums) frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  return frequencyCounter;
};

const createFrequencyBuckets = (frequencyCounter) => {
  const freqBuckets = [];

  for (const [uniqueNum, frequency] of Object.entries(frequencyCounter)) {
    freqBuckets[frequency] = freqBuckets[frequency] || [];
    freqBuckets[frequency].push(uniqueNum);
  }

  return freqBuckets;
};

const gatherTopKFrequent = (freqBuckets, maxFreq, k) => {
  const mostFrequent = [];

  for (let i = maxFreq; i >= 0; i--) {
    if (freqBuckets[i]) mostFrequent.push(...freqBuckets[i]);
    if (mostFrequent.length >= k) break;
  }

  return mostFrequent.slice(0, k);
};

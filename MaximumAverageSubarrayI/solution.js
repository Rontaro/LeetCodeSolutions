/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let max = 0;
    for (let i = 0; i < k; i++) {
        max = max + nums[i];
    }

    let slidingSum = max;
    for (let i = k; i<nums.length; i++) {
        slidingSum = slidingSum + nums[i] - nums[i-k];
        if (slidingSum > max) {
            max = slidingSum;
        }
    }

    return max/k;
};
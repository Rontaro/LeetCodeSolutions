/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    const map = new Map();
    let counter = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = k-num;
        if (map.has(num)) {
            counter++;
            const value = map.get(num);
            if (value === 1) {
                map.delete(num);
            } else {
                map.set(num, value-1);
            }
        } else if (complement > 0) {
            if (!map.has(complement)) {
                map.set(complement, 0)
            }
            map.set(complement, map.get(complement) + 1);
        }

    }
    return counter;
};
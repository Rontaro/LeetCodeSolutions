/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let max = 0;
    let k = 0;
    let zeroInWindow = 0;
    let moreThanOneZero = false;
    let zeroIndex = 0;
    for (let i = 0; i< nums.length; i++) {
        if (nums[i] === 1) {
            const currentOnes = i-k;
            if (currentOnes > max) {
                max = currentOnes;
            }
        }
        if (nums[i] === 0) {
            zeroInWindow++;
            const currentOnes = i-k-1;
            if (currentOnes > max) {
                max = currentOnes;
            }
            if (zeroInWindow > 1) {
                moreThanOneZero = true;
                k = zeroIndex + 1;
                zeroInWindow--;
            }
            zeroIndex = i;
        }
    }
    if (!moreThanOneZero) {
        return nums.length - 1;
    }
    return max;
};
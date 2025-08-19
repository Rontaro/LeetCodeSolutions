/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const length1 = nums1.length, length2 = nums2.length;
    if (length1 === 0) {
        if (length2 % 2 === 0) {
            return (nums2[length2/2] + nums2[length2/2 - 1]) / 2;
        } else {
            return nums2[Math.floor(length2/2)];
        }
    }
    if (length2 === 0) {
        if (length1 % 2 === 0) {
            return (nums1[length1/2] + nums1[length1/2 - 1]) / 2;
        } else {
            return nums1[Math.floor(length1/2)];
        }
    }
    const lengthSum = length1 + length2;
    if (lengthSum % 2 === 0) {
        return (findMedian(nums1, nums2, lengthSum/2) + findMedian(nums1, nums2, lengthSum/2 + 1)) / 2
    }
    return findMedian(nums1, nums2, Math.floor(lengthSum / 2) + 1)
};

const findMedian = function(nums1, nums2, k) {
    const length1 = nums1.length, length2 = nums2.length;
    if (length1 === 0) {
        return nums2[k - 1]
    }
    if (length2 === 0) {
        return nums1[k - 1]
    }
    if (k === 1) {
        return Math.min(nums1[0], nums2[0]);
    }

    const num1K = Math.min(Math.floor(k / 2), length1);
    const num2K = Math.min(Math.floor(k / 2), length2);
    const num1 = nums1[num1K - 1];
    const num2 = nums2[num2K - 1];
    if (num1 < num2) {
        return (findMedian(nums1.slice(num1K), nums2, k - num1K));
    }
    return (findMedian(nums1, nums2.slice(num2K), k - num2K));
}
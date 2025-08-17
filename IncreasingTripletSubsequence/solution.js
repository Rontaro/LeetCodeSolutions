/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let lowest = Infinity;
    let secondLowest = Infinity;
    for (let num of nums) {
        if (num <= lowest) {
            lowest = num;
        } else if (num <= secondLowest) {
            secondLowest = num;
        } else if (lowest < secondLowest && secondLowest < num) {
            return true;
        }
    }
    return false;
};
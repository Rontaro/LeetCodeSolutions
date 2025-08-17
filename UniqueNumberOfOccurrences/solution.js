/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const obj = {};
    for (const value of arr) {
        if (!obj[value]) {
            obj[value] = 0;
        }
        obj[value]++;
    }
    const objValues = Object.values(obj);
    return new Set(objValues)?.size === objValues.length
};
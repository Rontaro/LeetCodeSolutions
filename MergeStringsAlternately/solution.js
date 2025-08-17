/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const word1Arr = word1.split("");
    const word2Arr = word2.split("");
    const resultWordArr = [];
    for (let i = 0; i < (word1Arr.length >= word2Arr.length ? word1Arr.length : word2Arr.length); i++) {
        if (word1Arr[i]) {
            resultWordArr.push(word1Arr[i]);
        }
        if (word2Arr[i]) {
            resultWordArr.push(word2Arr[i]);
        }
    }
    return resultWordArr.join('')
};
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }
    const word1Obj = {};
    const word2Obj = {};
    for (let i = 0; i<word1.length; i++) {
        if (!word1Obj[word1[i]]) {
            word1Obj[word1[i]] = 0;
        }
        word1Obj[word1[i]]++;
        if (!word2Obj[word2[i]]) {
            word2Obj[word2[i]] = 0;
        }
        word2Obj[word2[i]]++;
    }
    const entries1 = Object.entries(word1Obj);
    const entries2 = Object.entries(word2Obj);
    if (entries1.length !== entries2.length) {
        return false;
    }
    for (let i = 0; i < entries1.length; i++) {
        if (!word2Obj[entries1[i][0]]) {
            return false;
        }
        if (!word1Obj[entries1[i][1]]) {
            word1Obj[entries1[i][1]] = 0;
        }
        word1Obj[entries1[i][1]]++
        if (!word2Obj[entries2[i][1]]) {
            word2Obj[entries2[i][1]] = 0;
        }
        word2Obj[entries2[i][1]]++
        
    }
    for (let i = 0; i < entries1.length; i++) {
        if (word2Obj[entries1[i][1]] !== word1Obj[entries1[i][1]]) {
            return false;
        }
    }
    return true
};
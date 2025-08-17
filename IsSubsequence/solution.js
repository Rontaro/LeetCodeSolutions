/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if (!s) {
        return true;
    }
    if (s.length > t.length) {
        return false;
    }
    for (let i=0, k=0; i<t.length; i++) {
        if (t[i] === s[k]) {
            k++;
            if (k === s.length) {
                return true
            }
        }
    }
    return false;
};
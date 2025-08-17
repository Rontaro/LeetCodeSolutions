/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let currentVowels = 0;
    for (let i = 0; i<k; i++) {
        if (vowels[s[i]]) {
            currentVowels++;
        }
    }

    if (currentVowels === k) {
        return k;
    }
    let maxVowels = currentVowels;
    for (let i = k; i < s.length; i++) {
        if (vowels[s[i-k]]) {
            currentVowels--;
        }
        if (vowels[s[i]]) {
            currentVowels++;
        }
        if (currentVowels > maxVowels) {
            maxVowels = currentVowels;
        }
    }

    return maxVowels
};

const vowels = {'a': true,'e': true,'i': true,'o': true,'u': true}
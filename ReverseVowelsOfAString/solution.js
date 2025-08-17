const vowels = {A: true, E: true, I: true, O: true, U: true, a: true, e: true, i: true, o: true, u: true}

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const arr = s.split('');
    const vowelsMap = {}
    arr.forEach((l, i) => {
        if (vowels[l]) {
            vowelsMap[i] = l;
        }
    })
    const keys = Object.keys(vowelsMap);
    for (let i=0, j= keys.length - 1; i < keys.length; i++, j--) {
        arr[keys[i]] = vowelsMap[keys[j]];
    }
    return arr.join('')
};
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let writeIndex = 0;
    let counter = 0;
    if (chars.length === 1) {
        return 1;
    }
    for(let i = 0; i < chars.length; i++) {
        if (chars[i] === chars[i+1]) {
            counter++;
        } else {
            const numberArr = (counter + 1).toString().split('');
            chars[writeIndex] = chars[i];
            writeIndex++
            for (let digit of numberArr) {
                chars[writeIndex] = digit;
                writeIndex++;
            }
            counter = 0;
        }
    }
    chars.length = writeIndex;
    return chars.length;
};
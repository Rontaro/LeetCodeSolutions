/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let counter = 0;
    if (flowerbed.length === 1) {
        if (flowerbed[0] === 0) {
            counter++;
        }
        return counter >= n
    }
    for (let i = 0; i < flowerbed.length; i++) {
        if (i === 0) {
            if (flowerbed[i] === 0 && flowerbed[1] === 0) {
                flowerbed[i] = 1
                counter++;
            }
        } else if (i === flowerbed.length - 1) {
            if (flowerbed[i] === 0 && flowerbed[flowerbed.length-2] === 0) {
                flowerbed[i] = 1
                counter++;
            }
        } else if (flowerbed[i] === 0 && flowerbed[i-1] === 0 && flowerbed[i+1] === 0) {
            flowerbed[i] = 1;
            counter++;
        }
        if (counter >= n) {
            return true;
        }
    }
    return counter >= n
};
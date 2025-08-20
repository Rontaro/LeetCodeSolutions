/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low = 1;
    let high = n;
    let currentGuess, mid;
    do {
        mid = (low+high)/2;
        currentGuess = guess(mid);
        if (currentGuess == -1) {
            high = mid - 1;
        }
        if (currentGuess == 1) {
            low = mid + 1;
        }
    } while (currentGuess != 0) 
    return mid;
};
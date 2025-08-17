/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const result = x < 0 ? parseInt("-"+(""+x).split("").slice(1).reverse().join('')) : parseInt((""+x).split("").reverse().join(''));
    if (result > 2147483647 || result < -2147483648) {
        return 0
    }
    return result
};
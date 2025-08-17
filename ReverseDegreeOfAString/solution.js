/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    return s.split("").reduce((a,b,i) => a+(-1*(b.charCodeAt()-123)*(i+1)), 0)
};
var TimeLimitedCache = function() {
    this.state = {}
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const alreadyAccessible = this.get(key);
    this.state[key] = {value, expiration: new Date().getTime() + duration};
    return alreadyAccessible !== -1
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (!this.state[key] || this.getIfExpired(key)) {
        return -1
    }
    return this.state[key].value;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.state)?.filter(key => !this.getIfExpired(key))?.length || 0
};

TimeLimitedCache.prototype.getIfExpired = function(key) {
    return new Date().getTime() > this.state[key].expiration;
}
/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
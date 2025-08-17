# Cache With Time Limit

**Link:** [https://leetcode.com/problems/cache-with-time-limit/description/](https://leetcode.com/problems/cache-with-time-limit/description/)

---

## Description

Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

The class has three public methods:

- `set(key, value, duration)`: accepts an integer `key`, an integer `value`, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return `true` if the same un-expired key already exists and `false` otherwise. Both the value and duration should be overwritten if the key already exists.

- `get(key)`: if an un-expired key exists, it should return the associated value. Otherwise it should return `-1`.

- `count()`: returns the count of un-expired keys.

---

## Constraints

- `0 <= key, value <= 10⁹`  
- `0 <= duration <= 1000`  
- `1 <= actions.length <= 100`  
- `actions.length === values.length`  
- `actions.length === timeDelays.length`  
- `0 <= timeDelays[i] <= 1450`  
- `actions[i]` is one of `"TimeLimitedCache"`, `"set"`, `"get"` and `"count"`  
- First action is always `"TimeLimitedCache"` and must be executed immediately, with a 0-millisecond delay

# Number of Recent Calls

**Link:** [https://leetcode.com/problems/number-of-recent-calls/description/](https://leetcode.com/problems/number-of-recent-calls/description/)

---

## Description

You have a `RecentCounter` class which counts the number of recent requests within a certain time frame.

Implement the `RecentCounter` class:

- `RecentCounter()`: Initializes the counter with zero recent requests.
- `int ping(int t)`: Adds a new request at time `t` (in milliseconds), and returns the number of requests that have happened in the past 3000 milliseconds (inclusive).  
  Specifically, return the number of requests in the range `[t - 3000, t]`.

It is guaranteed that every call to `ping` uses a strictly larger value of `t` than the previous call.

---

## Constraints

- `1 <= t <= 10⁹`  
- Each test case will call `ping` with strictly increasing values of `t`  
- At most `10⁴` calls will be made to `ping`

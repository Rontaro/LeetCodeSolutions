# Filter Elements from Array
https://leetcode.com/problems/filter-elements-from-array/description/
## Description
Given an integer array `arr` and a filtering function `fn`, return a filtered array `filteredArr`.

The `fn` function takes one or two arguments:
- `arr[i]`: the number from the array
- `i`: the index of `arr[i]`

The `filteredArr` should only contain the elements from `arr` for which the expression `fn(arr[i], i)` evaluates to a **truthy** value.

A **truthy** value is a value where `Boolean(value)` returns `true`.

> ⚠️ You must solve this without using the built-in `Array.filter` method.

---

## Constraints

- `0 <= arr.length <= 1000`  
- `-10⁹ <= arr[i] <= 10⁹`
# Reverse Degree of a String

**Link:** [https://leetcode.com/problems/reverse-degree-of-a-string/description/](https://leetcode.com/problems/reverse-degree-of-a-string/description/)

---

## Description

Given a string `s`, calculate its reverse degree.

The reverse degree is calculated as follows:  
For each character, multiply its position in the reversed alphabet (`'a' = 26`, `'b' = 25`, ..., `'z' = 1`) with its position in the string (1-indexed).  
Sum these products for all characters in the string.  

Return the reverse degree of `s`.

---

## Constraints

- `1 <= s.length <= 1000`  
- `s` contains only lowercase English letters.

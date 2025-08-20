# Guess Number Higher or Lower

**Problem link:** [LeetCode - Guess Number Higher or Lower](https://leetcode.com/problems/guess-number-higher-or-lower/?envType=study-plan-v2&envId=leetcode-75)

## Description

You are playing a game with your friend where you try to guess a number they picked between `1` and `n`.  
Every time you guess wrong, they will tell you whether the number is higher or lower than your guess.  
You call a predefined API `int guess(int num)` which returns:
- `-1` if the number is lower than the picked number
- `1` if the number is higher than the picked number
- `0` if your guess is correct

Return the number your friend picked.

## Constraints

- `1 <= n <= 2^31 - 1`
- The picked number is in the range `[1, n]`

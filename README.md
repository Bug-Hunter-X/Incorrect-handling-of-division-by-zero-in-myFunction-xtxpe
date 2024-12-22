# Incorrect Handling of Division by Zero in myFunction

This repository demonstrates a common error in JavaScript: incorrectly handling division by zero.

The `myFunction` function is intended to divide two numbers, `a` and `b`.  However, it contains a bug where, if either `a` or `b` is 0, it returns 0 instead of handling the division by zero appropriately (e.g., throwing an error or returning `NaN`). This unexpected behavior could lead to unexpected results in applications that use this function.

The `bug.js` file contains the buggy code, while `bugSolution.js` shows the corrected implementation.

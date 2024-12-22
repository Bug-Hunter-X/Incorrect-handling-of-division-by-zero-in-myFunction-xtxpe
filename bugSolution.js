```javascript
function myFunction(a, b) {
  if (b === 0) {
    throw new Error('Division by zero'); // Throw an error for division by zero
  }
  return a / b;
}
```
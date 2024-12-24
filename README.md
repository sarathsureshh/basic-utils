# Basic Utilities npm Package

This npm package provides a comprehensive set of utility functions that make your development process easier by providing reusable, well-tested helper methods for common tasks.

## Installation

To install this package, run:
```bash
npm install basic-utils
```

## Importing Utilities

You can import specific functions or the entire module:

```javascript
const { isEmpty, isJson, deepClone } = require('basic-utils');
// or
const utils = require('basic-utils');
```

## Functions and Usage

### 1. **`isEmpty`**
Checks if a value is empty.
- **Input:** Any type.
- **Output:** `true` if the value is empty, otherwise `false`.

```javascript
console.log(isEmpty('')); // true
console.log(isEmpty({})); // true
console.log(isEmpty([1, 2, 3])); // false
```

---

### 2. **`isJson`**
Checks if a string is a valid JSON.
- **Input:** `string`
- **Output:** `true` if valid JSON, otherwise `false`.

```javascript
console.log(isJson('{"key": "value"}')); // true
console.log(isJson('Not JSON')); // false
```

---

### 3. **`deepClone`**
Deep clones an object or array.
- **Input:** Object or Array.
- **Output:** A deep copy of the input.

```javascript
const obj = { a: 1, b: { c: 2 } };
const clone = deepClone(obj);
console.log(clone); // { a: 1, b: { c: 2 } }
```

---

### 4. **`randomString`**
Generates a random string of a specified length.
- **Input:** `length` (default: 8).
- **Output:** Random string.

```javascript
console.log(randomString(10)); // Example: 'aB3dEfGHi1'
```

---

### 5. **`capitalize`**
Capitalizes the first letter of a string.
- **Input:** `string`
- **Output:** String with the first letter capitalized.

```javascript
console.log(capitalize('hello')); // Hello
```

---

### 6. **`formatDate`**
Formats a date to `YYYY-MM-DD`.
- **Input:** `Date` object (default: current date).
- **Output:** Formatted date string.

```javascript
console.log(formatDate(new Date())); // 2024-12-24
```

---

### 7. **`debounce`**
Debounces a function, delaying its execution.
- **Input:** Function, delay in milliseconds.
- **Output:** Debounced function.

```javascript
const debouncedFunc = debounce(() => console.log('Run!'), 500);
debouncedFunc();
```

---

### 8. **`throttle`**
Throttles a function, ensuring it's called at most once every specified time.
- **Input:** Function, delay in milliseconds.
- **Output:** Throttled function.

```javascript
const throttledFunc = throttle(() => console.log('Run!'), 500);
throttledFunc();
```

---

### 9. **`isPlainObject`**
Checks if a value is a plain object.
- **Input:** Any value.
- **Output:** `true` if plain object, otherwise `false`.

```javascript
console.log(isPlainObject({})); // true
console.log(isPlainObject([])); // false
```

---

### 10. **`deepMerge`**
Merges multiple objects deeply.
- **Input:** Target object, source objects.
- **Output:** Merged object.

```javascript
const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 } };
console.log(deepMerge({}, obj1, obj2)); // { a: 1, b: { c: 2, d: 3 } }
```

---

### 11. **`objectToQueryString`**
Converts an object to a query string.
- **Input:** Object.
- **Output:** Query string.

```javascript
console.log(objectToQueryString({ a: 1, b: 2 })); // 'a=1&b=2'
```

---

### 12. **`compactArray`**
Removes falsy values from an array.
- **Input:** Array.
- **Output:** Filtered array.

```javascript
console.log(compactArray([0, 1, false, 2, '', 3])); // [1, 2, 3]
```

---

### 13. **`toCamelCase`**
Converts a string to camelCase.
- **Input:** `string`
- **Output:** Camel-cased string.

```javascript
console.log(toCamelCase('hello-world')); // helloWorld
```

---

### 14. **`toPascalCase`**
Converts a string to PascalCase.
- **Input:** `string`
- **Output:** Pascal-cased string.

```javascript
console.log(toPascalCase('hello-world')); // HelloWorld
```

---

### 15. **`bytesToHumanReadable`**
Converts bytes to a human-readable format.
- **Input:** Bytes, decimals (default: 2).
- **Output:** Human-readable string.

```javascript
console.log(bytesToHumanReadable(1024)); // '1 KB'
```

---

### 16. **`sleep`**
Pauses execution for a specified duration.
- **Input:** Milliseconds.
- **Output:** Promise.

```javascript
await sleep(1000); // Pauses for 1 second.
```

---

### 17. **`escapeHtml`**
Escapes HTML special characters.
- **Input:** String.
- **Output:** Escaped string.

```javascript
console.log(escapeHtml('<div>Test</div>')); // '&lt;div&gt;Test&lt;/div&gt;'
```

---

### 18. **`unescapeHtml`**
Unescapes HTML special characters.
- **Input:** String.
- **Output:** Unescaped string.

```javascript
console.log(unescapeHtml('&lt;div&gt;Test&lt;/div&gt;')); // '<div>Test</div>'
```

---

### 19. **`dateDifferenceInDays`**
Calculates the difference in days between two dates.
- **Input:** Two date strings or objects.
- **Output:** Difference in days.

```javascript
console.log(dateDifferenceInDays('2024-12-24', '2024-12-31')); // 7
```

---

### 20. **`groupBy`**
Groups an array of objects by a property.
- **Input:** Array, key.
- **Output:** Grouped object.

```javascript
const data = [
  { group: 'A', value: 1 },
  { group: 'B', value: 2 },
  { group: 'A', value: 3 }
];
console.log(groupBy(data, 'group'));
// { A: [{ group: 'A', value: 1 }, { group: 'A', value: 3 }], B: [{ group: 'B', value: 2 }] }
```

---

### 21. **`clamp`**
Clamps a number between a minimum and maximum value.
- **Input:** Value, min, max.
- **Output:** Clamped value.

```javascript
console.log(clamp(5, 1, 10)); // 5
console.log(clamp(-5, 1, 10)); // 1
```

---

### 22. **`isPalindrome`**
Checks if a value is a palindrome.
- **Input:** String or number.
- **Output:** `true` if palindrome, otherwise `false`.

```javascript
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome(12321)); // true
```

## Contributing
Contributions are welcome! Please submit issues or pull requests via the GitHub repository.

## License
This package is licensed under the MIT License.


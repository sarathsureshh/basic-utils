/**
 * Checks if a value is empty.
 */
function isEmpty(value) {
  if (value == null) return true;
  if (typeof value === "string" || Array.isArray(value))
    return value.length === 0;
  if (typeof value === "object") return Object.keys(value).length === 0;
  return false;
}

/**
 * Checks if a string is a valid JSON.
 */
function isJson(str) {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

/**
 * Deep clones an object or array.
 */
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Generates a random string of a specified length.
 */
function randomString(length = 8) {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join("");
}

/**
 * Capitalizes the first letter of a string.
 */
function capitalize(str) {
  if (typeof str !== "string" || !str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Formats a date to YYYY-MM-DD.
 */
function formatDate(date = new Date()) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

/**
 * Debounces a function.
 */
function debounce(func, wait = 300) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

/**
 * Throttles a function.
 */
function throttle(func, wait = 300) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      lastTime = now;
      func.apply(this, args);
    }
  };
}

/**
 * Checks if a value is a plain object.
 */
function isPlainObject(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}

/**
 * Merges two or more objects deeply.
 */
function deepMerge(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isPlainObject(target) && isPlainObject(source)) {
    for (const key in source) {
      if (isPlainObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        deepMerge(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return deepMerge(target, ...sources);
}

/**
 * Converts an object to query string.
 */
function objectToQueryString(obj) {
  return Object.entries(obj)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
}

/**
 * Removes falsy values from an array.
 */
function compactArray(arr) {
  return arr.filter(Boolean);
}

/**
 * Converts a string to camelCase.
 */
function toCamelCase(str) {
  return str
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
    .replace(/^\w/, (char) => char.toLowerCase());
}

/**
 * Converts a string to PascalCase.
 */
function toPascalCase(str) {
  return str
    .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
    .replace(/^\w/, (char) => char.toUpperCase());
}

/**
 * Converts bytes to a human-readable format.
 */
function bytesToHumanReadable(bytes, decimals = 2) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return (
    parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
  );
}

/**
 * Pauses execution for a given number of milliseconds.
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Escapes HTML special characters.
 */
function escapeHtml(str) {
  return str.replace(/[&<>"']/g, (tag) => {
    const chars = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return chars[tag] || tag;
  });
}

/**
 * Unescapes HTML special characters.
 */
function unescapeHtml(html) {
  const entityMap = {
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'",
  };
  return html.replace(
    /&lt;|&gt;|&amp;|&quot;|&#39;/g,
    (match) => entityMap[match]
  );
}


/**
 * Calculates the difference between two dates in days.
 */
function dateDifferenceInDays(date1, date2) {
  const diff = Math.abs(new Date(date1) - new Date(date2));
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/**
 * Groups an array of objects by a property.
 */
function groupBy(array, key) {
  return array.reduce((result, item) => {
    (result[item[key]] = result[item[key]] || []).push(item);
    return result;
  }, {});
}

/**
 * Clamps a number between a minimum and maximum value.
 */
function clamp(value, min, max) {
  return Math.max(min, Math.min(value, max));
}

/**
 * Checks if a value is a palindrome.
 */
function isPalindrome(value) {
  const str = String(value).replace(/[\W_]/g, "").toLowerCase();
  return str === str.split("").reverse().join("");
}

module.exports = {
  isEmpty,
  isJson,
  deepClone,
  randomString,
  capitalize,
  formatDate,
  debounce,
  throttle,
  isPlainObject,
  deepMerge,
  objectToQueryString,
  compactArray,
  toCamelCase,
  toPascalCase,
  bytesToHumanReadable,
  sleep,
  escapeHtml,
  unescapeHtml,
  dateDifferenceInDays,
  groupBy,
  clamp,
  isPalindrome,
};

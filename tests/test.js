const {
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
} = require("../index");

describe("Utility Functions", () => {
  test("isEmpty works correctly", () => {
    expect(isEmpty("")).toBe(true);
    expect(isEmpty([])).toBe(true);
    expect(isEmpty({})).toBe(true);
    expect(isEmpty("test")).toBe(false);
  });

  test("isJson works correctly", () => {
    expect(isJson('{"key":"value"}')).toBe(true);
    expect(isJson("invalid json")).toBe(false);
  });

  test("deepClone works correctly", () => {
    const obj = { a: 1, b: { c: 2 } };
    const clone = deepClone(obj);
    expect(clone).toEqual(obj);
    expect(clone).not.toBe(obj);
  });

  test("randomString generates correct length", () => {
    expect(randomString(5).length).toBe(5);
    expect(typeof randomString(10)).toBe("string");
  });

  test("capitalize works correctly", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("formatDate formats correctly", () => {
    expect(formatDate(new Date("2024-12-24"))).toBe("2024-12-24");
  });

  test("debounce executes only once within delay", (done) => {
    let count = 0;
    const debounced = debounce(() => count++, 100);
    debounced();
    debounced();
    setTimeout(() => {
      expect(count).toBe(1);
      done();
    }, 200);
  });

  test("throttle executes only once within interval", (done) => {
    let count = 0;
    const throttled = throttle(() => count++, 100);
    throttled();
    throttled();
    setTimeout(() => {
      expect(count).toBe(1);
      done();
    }, 200);
  });

  test("isPlainObject identifies plain objects correctly", () => {
    expect(isPlainObject({})).toBe(true);
    expect(isPlainObject([])).toBe(false);
  });

  test("deepMerge merges objects correctly", () => {
    expect(deepMerge({}, { a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
  });

  test("objectToQueryString converts correctly", () => {
    expect(objectToQueryString({ a: 1, b: 2 })).toBe("a=1&b=2");
  });

  test("compactArray removes falsy values", () => {
    expect(compactArray([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
  });

  test("toCamelCase converts correctly", () => {
    expect(toCamelCase("hello-world")).toBe("helloWorld");
  });

  test("toPascalCase converts correctly", () => {
    expect(toPascalCase("hello-world")).toBe("HelloWorld");
  });

  test("bytesToHumanReadable converts correctly", () => {
    expect(bytesToHumanReadable(1024)).toBe("1 KB");
  });

  test("sleep delays execution", async () => {
    const start = Date.now();
    await sleep(100);
    expect(Date.now() - start).toBeGreaterThanOrEqual(100);
  });

  test("escapeHtml escapes HTML correctly", () => {
    expect(escapeHtml("<div>Test</div>")).toBe("&lt;div&gt;Test&lt;/div&gt;");
  });

  test("unescapeHtml unescapes HTML correctly", () => {
    expect(unescapeHtml("&lt;div&gt;Test&lt;/div&gt;")).toBe("<div>Test</div>");
  });

  test("dateDifferenceInDays calculates correctly", () => {
    expect(dateDifferenceInDays("2024-12-24", "2024-12-31")).toBe(7);
  });

  test("groupBy groups data correctly", () => {
    const data = [
      { group: "A", value: 1 },
      { group: "B", value: 2 },
      { group: "A", value: 3 },
    ];
    expect(groupBy(data, "group")).toEqual({
      A: [
        { group: "A", value: 1 },
        { group: "A", value: 3 },
      ],
      B: [{ group: "B", value: 2 }],
    });
  });

  test("clamp clamps values correctly", () => {
    expect(clamp(5, 1, 10)).toBe(5);
    expect(clamp(-5, 1, 10)).toBe(1);
    expect(clamp(15, 1, 10)).toBe(10);
  });

  test("isPalindrome identifies palindromes correctly", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
  });
});

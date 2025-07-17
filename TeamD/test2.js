const isValid = (s) => {
  let stack = [];

  if (s.length === 1 || s.length % 2 !== 0) return false;

  for (let p of s) {
    if (stack[stack.length - 1] === "(" && p === ")") {
      stack.pop();
    } else if (stack[stack.length - 1] === "{" && p === "}") {
      stack.pop();
    } else if (stack[stack.length - 1] === "[" && p === "]") {
      stack.pop();
    } else {
      stack.push(p);
    }
  }

  return stack.length === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([])")); // true
console.log(isValid("([}}])")); // false

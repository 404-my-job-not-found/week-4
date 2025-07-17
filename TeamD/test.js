const romanToInt = function (s) {
  let result = 0;
  const memo = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  const len = s.length;

  for (let i = 0; i < len; i++) {
    const curr = memo[s[i]];
    const next = memo[s[i + 1]];
    if (curr < next) result -= curr;
    else result += curr;
  }

  return result;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994

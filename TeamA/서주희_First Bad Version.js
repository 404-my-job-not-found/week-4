// 시간 초과
var solution = function (isBadVersion) {
  return function (n) {
    let result;

    for (let i = 1; i <= n; i++) {
      if (isBadVersion(i)) {
        result = i;
        break;
      }
    }

    return result;
  };
};

// 이분 탐색, 정답
var solution = function (isBadVersion) {
  return function (n) {
    let min = 1,
      max = n;
    let result = n;

    while (min <= max) {
      const half = Math.floor((min + max) / 2);

      if (isBadVersion(half)) {
        max = half - 1;
        result = Math.min(result, half);
      } else {
        min = half + 1;
      }
    }

    return result;
  };
};

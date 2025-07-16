var solution = function (isBadVersion: any) {
  return function (n: number) {
    let left = 1;
    let right = n;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (left === right) return left;

      if (isBadVersion(mid)) {
        right = mid;
      }

      if (!isBadVersion(mid)) {
        left = mid + 1;
      }
    }
  };
};

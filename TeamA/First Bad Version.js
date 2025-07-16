/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid; // bad인 걸 찾았으니 더 왼쪽에서 또 bad인지 확인
      } else {
        left = mid + 1; // 아직 good이니까 bad는 더 오른쪽에 있음
      }
    }

    return left; // left == right == 첫 bad version
  };
};

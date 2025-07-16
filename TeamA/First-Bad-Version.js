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
  return function (n) {
    let left = 1; // 시작 버전
    let right = n; // 마지막 버전

    // 이진 탐색 시작
    while (left < right) {
      // 가운데 버전 선택 (중간점 계산 시 overflow 방지)
      const mid = Math.floor(left + (right - left) / 2);

      if (isBadVersion(mid)) {
        // mid가 bad면 그 이전도 bad일 수 있음 - 왼쪽으로 좁힘
        right = mid;
      } else {
        // mid가 괜찮으면 그 다음부터 bad - 오른쪽으로 좁힘
        left = mid + 1;
      }
    }

    // left === right 가 되면 그게 첫 bad version
    return left;
  };
};

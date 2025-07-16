/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 1;
    let right = n;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid; // mid가 bad version이면, right를 mid로 이동
      } else {
        left = mid + 1; // mid가 good version이면, left를 mid + 1로 이동
      }
    }

    return left; // left가 첫 번째 bad version
  };
};

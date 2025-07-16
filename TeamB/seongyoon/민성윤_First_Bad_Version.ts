/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {
    
  return function(n: number): number {
      let first = 1; // 시작점
      let last = n; // 끝점
      while(first < last) {
          const center = Math.floor((first + last) / 2);
          
          if (isBadVersion(center)) {
              last = center;
          } else {
              first = center + 1
          }
      }
      return first
  };
};
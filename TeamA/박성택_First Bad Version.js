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
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        // for(let i = 1; i <= n; i++) {
        //     if(isBadVersion(i)) return i;
        // }

        // 이분 탐색(Binary Search) 으로 O(log n)에 해결해야 합니다!
        
        let left = 1;
        let right = n;

        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);
            // console.log(mid) 
            // 1, 5, 3 
            // 4, 5, 4
            if (isBadVersion(mid)) {
                // mid가 bad면, 더 왼쪽에도 bad가 있을 수 있음
                right = mid;
            } else {
                // mid가 good이면, 첫 bad는 오른쪽에 있음
                left = mid + 1;
            }
        }

        return left; // left가 첫 bad version
    };
};
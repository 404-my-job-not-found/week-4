/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // nums1의 마지막 위치부터 채우기 위한 인덱스
  let p1 = m - 1; // nums1 유효 범위 마지막 인덱스
  let p2 = n - 1; // nums2 마지막 인덱스
  let i = m + n - 1; // nums1 전체 마지막 인덱스 (뒤에서부터 채움)

  // 두 배열을 뒤에서부터 비교하며 병합
  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] > nums2[p2]) {
      nums1[i] = nums1[p1]; // 더 큰 값을 뒤에서부터 채움
      p1--;
    } else {
      nums1[i] = nums2[p2];
      p2--;
    }
    i--;
  }

  // nums2에 남은 값이 있으면 채워줌
  // (nums1에는 이미 들어가 있으므로 nums1에 남은 값은 복사할 필요 없음)
  while (p2 >= 0) {
    nums1[i] = nums2[p2];
    p2--;
    i--;
  }
};

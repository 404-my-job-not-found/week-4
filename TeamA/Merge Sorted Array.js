/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 두 개의 오름차순 배열
// nums1에다가 nums2 합쳐서, 하나의 정렬된 배열로 in-place로 -> 새 배열 만들지 않기..ㅋ
// 즉, 두 개의 정렬된 배열을 하나로 정렬해라
// 어차피 nums1 뒤에 빈 공간 있음 -> 그래서 뒤부터 채워야된다고... 지피티가 그럼 .. ㅋ..,,
// 병합정렬이니까 투 포인터 -> 진짜 제목 아니었으면 우짤뻔
var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // nums1의 끝 인덱스
  let j = n - 1; // nums2의 끝 인덱스
  let k = m + n - 1; // nums1의 전체 끝 (여기다가 nums2 비교하면서 넣기 시작할 거임)

  while (j >= 0) {
    // nums2 다 넣으면 끝
    if (i >= 0 && nums1[i] > nums2[j]) {
      // nums1에 있는 게 더 크면
      nums1[k] = nums1[i]; // nums1에 있는 걸 뒤에 두고, nums2에 있는 건 그대로...
      i--;
    } else {
      // nums2에 있는 게 더 크면
      nums1[k] = nums2[j]; // nums2에 있는 걸 뒤에 둚
      j--; // 그리고 nums2를 줄이고.. nums1은 그럼 그대로...
    }
    k--;
  }
};

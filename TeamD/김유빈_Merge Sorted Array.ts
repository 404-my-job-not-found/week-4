/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, nums1.length - m, ...nums2); // nums1의 m번째 인덱스부터 끝까지 nums2로 대체

  nums1.sort((a, b) => a - b); // nums1을 오름차순으로 정렬
}

/**
 Do not return anything, modify nums1 in-place instead.
 */

// 두 배열을 합치고 sorting 하는 문제입니다.
// 쓰라고 만든 메서드들이기 때문에 메서들로만 풀겠습니다. ㅠㅠ
// nums1은 m+n이기 때문에 [1, 2, 3, 0, 0, 0] 0이 들어간 자리를 nums2로 치환하면 될 것 같습니다.
// splice는 원본 배열을 잘라서 내뱉는 메서드지만 초반 주차 때 설명 드렸듯이 3번째 인자 부터는 새로운 배열을 넣습니다
// 원본 배열만 수정하면 되기 때문에 반환값은 안쓰고 배열만 수정해준 뒤 sorting 해줬습니다

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [], 0));
console.log(merge([0], 0, [1], 1));

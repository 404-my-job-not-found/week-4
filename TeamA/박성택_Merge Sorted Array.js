/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // 합치고 정렬하면 안되겠지?
    // nums1에 병합
    // 한번에 두개 요소?

    // nums1의 앞부분, num2 병합 후 정렬
    const merged = nums1.slice(0, m).concat(nums2).sort((a, b) => a - b);

    // 정렬된 배열을 다시 nums1에 넣어주기
    for (let i = 0; i < merged.length; i++) {
        nums1[i] = merged[i];
    }    
};
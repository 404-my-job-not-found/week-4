// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   console.log(nums1[m])
//     for (let i = 0; i < n; i++) {
//       nums1[m + i] = nums2[i];  // nums1의 뒷부분에 nums2의 값을 복사
//     }

//   console.log(nums1)
// };

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
	console.log(nums1[m])
	let p1 = m - 1
	let p2 = n - 1
	let p = m + n - 1

	while (p1 >= 0 && p2 >= 0) {
		if (nums1[p1] > nums2[p2]) {
			nums1[p] = nums1[p1]
			p1--
		} else {
			nums1[p] = nums2[p2]
			p2--
		}
		p--
	}

	// 아직 nums2에 남은 게 있다면 복사
	while (p2 >= 0) {
		nums1[p] = nums2[p2]
		p2--
		p--
	}
	console.log(nums1)
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  const nums1Array = nums1.slice(0, m);
  const nums2Array = nums2.slice(0, n);

  const merged = [...nums1Array, ...nums2Array].sort((a, b) => a - b);

  for (let i = 0; i < m + n; i++) {
    nums1[i] = merged[i];
  }
}

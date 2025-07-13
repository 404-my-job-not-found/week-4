var merge = function (nums1, m, nums2, n) {
  let i = m - 1,
    j = n - 1,
    k = nums1.length - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] < nums2[j]) {
      nums1[k] = nums2[j];
      j--;
    } else {
      nums1[k] = nums1[i];
      i--;
    }

    k--;
  }

  if (j >= 0) {
    for (; j >= 0; j--) {
      nums1[k] = nums2[j];
      k--;
    }
  }
};

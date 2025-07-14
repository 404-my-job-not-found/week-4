var merge = function (nums1, m, nums2, n) {
  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while (second >= 0) {
    let lVal = nums1[first];
    let rVal = nums2[second];

    if (lVal > rVal) {
      nums1[i] = lVal;
      i--;
      first--;
    } else {
      nums1[i] = rVal;
      i--;
      second--;
    }
  }
};

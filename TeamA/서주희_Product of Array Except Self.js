var productExceptSelf = function (nums) {
  const length = nums.length;
  const result = Array(length).fill(1);
  let total = 1;
  // 현재 요소를 기준으로 왼쪽에 있는 숫자들의 곱을 저장
  for (let i = 1; i < length; i++) {
    total *= nums[i - 1];
    result[i] = total;
  }

  total = 1;
  // 현재 요소를 기준으로 오른쪽에 있는 숫자들의 곱을 구하고 기존 값과 곱한다.
  for (let i = length - 2; i >= 0; i--) {
    total *= nums[i + 1];
    result[i] *= total;
  }

  return result;
};

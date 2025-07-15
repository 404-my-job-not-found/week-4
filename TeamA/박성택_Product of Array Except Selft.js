/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // 정수 배열 nums가 주어졌을 때, answer[i]가 nums[i]를 제외한 nums의 모든 요소의 곱과 같도록 배열의 답을 반환합니다.
    // nums의 접두사 또는 접미사의 곱은 32비트 정수에 맞도록 보장됩니다.
    // 나누기 연산을 사용하지 않고 O(n) 시간 내에 실행되는 알고리즘을 작성해야 합니다.

    // 나누기를 사용하지 않아야 한다
    // 해당 인덱스에 해당하는 값을 제외한 배열의 곱을 구한다?
    
    // 반복문은 O(n)을 벗어나겠다
    // for..


    // result = [
    // 2*3*4 = 24,
    // 1*3*4 = 12,
    // 1*2*4 = 8,
    // 1*2*3 = 6
    // ]

    // 0. 해당 길이만큼의 배열 생성
    const n = nums.length;
    const answer = new Array(n).fill(1);
    // [1,1,1,1]

    // 1) 왼쪽 누적곱: answer[i] = 왼쪽 원소 곱
    let left = 1;
    for (let i = 0; i < n; i++) {
        answer[i] = left;
        left *= nums[i];
    }

    // [1,1,2,6]
    // [1,1,2,6]

    // 2) 오른쪽 누적곱: answer[i] *= 오른쪽 원소 곱
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i];
    }

    // [24,12,4,1]
    // [24,12,8,6]

    return answer;
};
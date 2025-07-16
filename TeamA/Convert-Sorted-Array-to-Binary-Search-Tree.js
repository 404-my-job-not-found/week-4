// 이진 트리 노드를 정의하는 생성자 (LeetCode에서는 이미 정의되어 있음)
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/**
 * 정렬된 배열을 높이 균형 이진 탐색 트리로 변환
 * @param {number[]} nums - 오름차순으로 정렬된 정수 배열
 * @return {TreeNode} - 루트 노드를 반환
 */
var sortedArrayToBST = function (nums) {
  // 헬퍼 함수: left ~ right 구간에서 트리를 구성
  function helper(left, right) {
    // base case: 범위를 벗어나면 null 반환 (리프노드의 자식은 null)
    if (left > right) return null;

    // 중간 인덱스를 선택하여 현재 구간의 루트로 사용
    const mid = Math.floor((left + right) / 2);

    // 중간값으로 노드 생성
    const node = new TreeNode(nums[mid]);

    // 왼쪽 절반을 이용해 왼쪽 서브트리 생성
    node.left = helper(left, mid - 1);

    // 오른쪽 절반을 이용해 오른쪽 서브트리 생성
    node.right = helper(mid + 1, right);

    // 현재 노드(서브트리의 루트)를 반환
    return node;
  }

  // 전체 배열 구간으로 시작
  return helper(0, nums.length - 1);
};

// 핵심 개념
// 정렬된 배열의 중간 값을 루트로 선택하면 좌우 균형이 맞는 이진 탐색 트리 (BST)를 만들 수 있음
// 좌측 절반은 왼쪽 서브트리, 우측 절반은 오른쪽 서브트리로 재귀적으로 분할
// 배열의 인덱스를 기준으로 재귀적으로 계속 나누면서 노드를 생성

var sortedArrayToBST = function (nums) {
  // 배열이 비어있으면 트리를 만들 수 없으므로 null 반환
  if (nums.length === 0) {
    return null;
  }

  // 재귀적으로 트리를 만드는 함수
  function bst(nums, startIndex, endIndex) {
    // 시작 인덱스가 끝 인덱스보다 크면 더 이상 노드가 없으므로 null 반환
    if (startIndex > endIndex) {
      return null;
    }

    // 중간 인덱스를 구함 (가운데 값을 루트로 삼으면 트리가 균형을 이룸)
    let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    // 중간 값을 루트 노드로 생성
    let currentNode = new TreeNode(nums[middleIndex]);

    // 왼쪽 서브트리 생성
    currentNode.left = bst(nums, startIndex, middleIndex - 1);
    // 오른쪽 서브트리 생성
    currentNode.right = bst(nums, middleIndex + 1, endIndex);

    // 완성된 노드 반환
    return currentNode;
  }

  // 전체 배열을 대상으로 재귀 함수 호출하여 트리 생성
  return bst(nums, 0, nums.length - 1);
};

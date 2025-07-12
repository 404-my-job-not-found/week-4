var sortedArrayToBST = function (nums) {
  const length = nums.length;
  const rootIndex = Math.floor(length / 2);
  // 중앙 요소의 값으로 루트노드 생성
  const rootNode = new TreeNode(nums[rootIndex], null, null);

  const makeNodes = (parentNode, min, max, isLeft) => {
    // min이 max보다 크다면 구간 탐색이 불가능하므로 리턴
    if (min > max) {
      return;
    }
    // 현재 구간의 가운데 요소의 인덱스
    const index = Math.floor((min + max) / 2);
    // 현재 구간의 루트 노드 생성
    const childNode = new TreeNode(nums[index], null, null);
    // 왼쪽 구간을 탐색중이라면 방금 생성한 노드를 부모 노드의 왼쪽에 연결
    if (isLeft) {
      parentNode.left = childNode;
    } else {
      // 오른쪽 구간을 탐색중이라면 방금 생성한 노드를 부모 노드의 오른쪽에 연결
      parentNode.right = childNode;
    }

    makeNodes(childNode, min, index - 1, true);
    makeNodes(childNode, index + 1, max, false);
  };
  // 가운데 루트 노드 기준으로 왼쪽/오른쪽 구간을 나눔
  makeNodes(rootNode, 0, rootIndex - 1, true);
  makeNodes(rootNode, rootIndex + 1, length - 1, false);

  return rootNode;
};

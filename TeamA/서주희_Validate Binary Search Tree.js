var isValidBST = function (root) {
  // 최소/최대 범위를 정해서 유효성 검사
  const validate = (node, min, max) => {
    if (!node) return true;
    // 현재 node의 val가 주어진 최소/최대 범위를 벗어나는지 확인
    // 범위를 벗어난다면 유효한 이진 탐색 트리가 아니므로 false 반환
    if (
      (min !== null && node.val <= min) ||
      (max !== null && node.val >= max)
    ) {
      return false;
    }
    // 1. 왼쪽 서브 트리 검사 - 왼쪽 트리의 모든 val는 현재 노드의 val보다 작아야 하므로 max는 현재 노드 val로 지정
    // 2. 오른쪽 서브 트리 검사 - 오른쪽 트리의 모든 val는 현재 노드의 val보다 커야 하므로 min는 현재 노드 val로 지정
    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max)
    );
  };
  // 루트 노드는 어떤 값이어도 가능하므로 최솟/최댓값을 null로 지정
  return validate(root, null, null);
};

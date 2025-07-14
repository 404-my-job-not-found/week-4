var isValidBST = function (root) {
  // 이전에 방문한 노드 값을 저장할 변수
  // 중위 순회에서 이전 노드와 비교하기 위해 사용
  let previous = null;

  // 중위 순회를 사용하여 BST를 검증하는 재귀 함수
  // 중위 순회: 왼쪽 서브트리 → 현재 노드 → 오른쪽 서브트리
  function dfs(node) {
    // 노드가 null 이면 유효한 BST (빈 트리)
    if (!node) {
      return true;
    }

    // 1단계: 왼쪽 서브트리 검사
    // 왼쪽 서브트리가 유효하지 않으면 전체 트리도 유효하지 않음
    if (!dfs(node.left)) {
      return false;
    }

    // 2단계: 현재 노드 검사
    // 이전에 방문한 노드가 있고 현재 노드 값이 이전 노드 값보다 작거나 같으면 BST 속성 위반
    if (previous !== null && node.val <= previous) {
      return false;
    }

    // 현재 노드 값을 이전 값으로 저장
    // 다음 노드와 비교할 때 사용
    previous = node.val;

    // 3단계: 오른쪽 서브트리 검사
    // 오른쪽 서브트리가 유효한지 확인
    return dfs(node.right);
  }

  // 루트 노드부터 검증 시작
  return dfs(root);
};

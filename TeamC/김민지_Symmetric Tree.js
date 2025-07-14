var isSymmetric = function (root) {
  // 트리가 비어있으면 대칭이므로 true 반환
  if (root === null) {
    return true;
  }

  function isMirror(left, right) {
    // 두 노드가 모두 null 이면 대칭이므로 true 반환
    if (left === null && right === null) {
      return true;
    }

    // 한쪽만 null 이면 대칭이 아니므로 false 반환
    if (left === null || right === null) {
      return false;
    }

    // 두 노드의 값이 다르면 대칭이 아니므로 false 반환
    if (left.val !== right.val) {
      return false;
    }

    // 왼쪽 서브트리의 왼쪽 자식과 오른쪽 서브트리의 오른쪽 자식 그리고 왼쪽 서브트리의 오른쪽 자식과 오른쪽 서브트리의 왼쪽 자식이 대칭인지 재귀적으로 확인
    const leftMirror = isMirror(left.left, right.right);
    const rightMirror = isMirror(left.right, right.left);

    // 두 쌍이 모두 대칭이면 전체가 대칭이므로 AND 연산
    return leftMirror && rightMirror;
  }

  // 루트의 왼쪽과 오른쪽 서브트리가 대칭인지 확인
  return isMirror(root.left, root.right);
};

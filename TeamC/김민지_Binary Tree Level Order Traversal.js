var levelOrder = function (root) {
  // 빈 트리인 경우 빈 배열 반환
  if (root === null) {
    return [];
  }

  // 레벨별로 노드 값 저장
  const result = [];

  // 큐 초기화
  const queue = [root];

  // 큐가 비어있을 때까지 반복
  while (queue.length > 0) {
    // 현재 레벨의 노드 개수
    const levelSize = queue.length;

    // 현재 레벨의 노드 값 저장
    const currentLevel = [];

    // 현재 레벨의 모든 노드 처리
    for (let i = 0; i < levelSize; i++) {
      // 큐에서 노드 꺼내서 처리
      const node = queue.shift();

      // 현재 노드의 값 추가
      currentLevel.push(node.val);

      // 왼쪽 자식 노드 추가
      if (node.left) {
        queue.push(node.left);
      }

      // 오른쪽 자식 노드 추가
      if (node.right) {
        queue.push(node.right);
      }
    }

    // 현재 레벨의 모든 노드 처리 후 결과 배열에 추가
    result.push(currentLevel);
  }

  // 최종 결과 반환
  return result;
};

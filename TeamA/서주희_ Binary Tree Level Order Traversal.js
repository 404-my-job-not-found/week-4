var levelOrder = function (root) {
  const result = [];

  // 트리를 순회하고 현재 노드의 depth를 구하는 로직은 Maximum Depth of Binary Tree 풀이와 똑같습니다.
  // 한가지 다른 점은 노드 val을 저장하는 배열을 만들고, depth를 index로 사용해 노드의 val를 배열에 저장하도록 했습니다.
  const findNode = (root, cnt) => {
    if (result[cnt]) {
      result[cnt].push(root.val);
    } else {
      result.push([root.val]);
    }

    if (root?.left) {
      findNode(root.left, cnt + 1);
    }
    if (root?.right) {
      findNode(root.right, cnt + 1);
    }
  };

  if (root) {
    findNode(root, 0);
  }

  return result;
};

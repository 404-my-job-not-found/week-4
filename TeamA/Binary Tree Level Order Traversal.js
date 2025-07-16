/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 시발.. 이건 또 어떻게 뱉으라는 말이지? depth가 3이상이면요...? [][][] 인가요.... 일단 두려움을 안고 시작
// 같은 레벨끼리 비교해야 하니까... BFS 인듯... 그럼 재귀아니고 while과 queue....
// 난.. 바보야.. 어려워서 gg 침
var levelOrder = function (root) {
  if (!root) return []; // 일단 null이면 빈 배열 리턴

  const result = [];
  const queue = [root]; // queue에 일단 root를 넣는다.. 어쨋든 이제부터 방문할 노드 중 젤 첫번째는 root니깐...

  while (queue.length > 0) {
    // queue에 뭐가 있으면 계속 반복
    const levelSize = queue.length; // 현재 queue의 길이 == 현재 층의 노드 개수
    const level = [];

    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift(); // 큐의 맨 앞에 있는 요소를 꺼내서 로직을 풂
      level.push(node.val);

      // 요소가 있으면 큐에 넣어야 다음 노드들 돌 수 있음
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level); // while 한 사이클 끝나면 한 level이라는 뜻
  }

  return result;
};

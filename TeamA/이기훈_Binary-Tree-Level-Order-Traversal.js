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
var levelOrder = function (root) {
  if (!root) return [];

  const result = []; // 최종 결과를 담을 배열
  const queue = [root]; // 시작은 루트 하나만 큐에 담음

  while (queue.length > 0) {
    const levelSize = queue.length; // 현재 레벨에 있는 노드 개수
    const level = []; // 현재 레벨의 값을 저장할 배열
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);

      if (node.left) {
        queue.push(node.left); // 왼쪽 자식이 있으면 큐에 추가
      }
      if (node.right) {
        queue.push(node.right); // 오른쪽 자식이 있으면 큐에 추가
      }
    }

    result.push(level);
  }
  return result;
};

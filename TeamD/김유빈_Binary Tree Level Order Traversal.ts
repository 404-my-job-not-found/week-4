/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = []; // 결과를 저장할 배열

  const queue: TreeNode[] = [root]; // BFS를 위한 큐 초기화

  while (queue.length > 0) {
    const levelSize = queue.length; // 현재 레벨의 노드 개수
    const currentLevel: number[] = []; // 현재 레벨의 노드 값을 저장할 배열

    for (let i = 0; i < levelSize; i++) {
      // 현재 레벨의 노드 개수만큼 반복
      const node = queue.shift()!;
      // 큐에서 노드를 꺼내고, 해당 노드의 값을 현재 레벨 배열에 추가
      currentLevel.push(node.val);
      // 왼쪽과 오른쪽 자식 노드가 있다면 큐에 추가

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    // 현재 레벨의 노드 값을 결과 배열에 추가
    result.push(currentLevel);
  }

  return result;
}

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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) return true;

  function isSymmetric(n1, n2) {
    if (!n1 && !n2) return true; // 둘 다 null이면 대칭
    if (!n1 || !n2) return false; // 한쪽만 null이면 비대칭
    if (n1.val !== n2.val) return false; // 값이 다르면 비대칭
    //  왼쪽 - 오른쪽, 오른쪽 - 왼쪽 비교 -> 모두 true 면 true (대칭)
    return isSymmetric(n1.left, n2.right) && isSymmetric(n1.right, n2.left);
  }
  // 재귀 시작
  return isSymmetric(root.left, root.right);
};

// 조건 정리
// 두 노드의 값이 같아야 함
// 한쪽의 왼쪽노드와 다른 쪽의 오른쪽 노드가 같아야 함
// 반대 방향도 마찬가지

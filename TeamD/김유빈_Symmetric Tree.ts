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

// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return true; // 빈 트리는 대칭임

  // 대칭성을 검사하는 재귀 함수
  const isMirror = (left: TreeNode | null, right: TreeNode | null): boolean => {
    if (!left && !right) return true;
    if (!left || !right) return false;

    return (
      isMirror(left.left, right.right) && // 왼쪽 서브트리의 왼쪽과 오른쪽 서브트리의 오른쪽 비교
      isMirror(left.right, right.left) && // 왼쪽 서브트리의 오른쪽과 오른쪽 서브트리의 왼쪽 비교
      left.val === right.val // 현재 노드 값이 같아야 함
    );
  };

  return isMirror(root.left, root.right); // 루트의 왼쪽과 오른쪽 서브트리를 비교하여 대칭성 검사
}

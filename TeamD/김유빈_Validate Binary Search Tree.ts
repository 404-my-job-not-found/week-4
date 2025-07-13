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

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function isValidBST(root: TreeNode | null): boolean {
  //  validate 함수
  const validate = (
    node: TreeNode | null,
    min: number,
    max: number
  ): boolean => {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return (
      validate(node.left, min, node.val) && validate(node.right, node.val, max) // 왼쪽 서브트리는 현재 노드 값보다 작아야 하고, 오른쪽 서브트리는 현재 노드 값보다 커야 함
    );
  };

  return validate(root, -Infinity, Infinity); // 초기값으로 무한대를 사용하여 모든 값이 유효한 범위에 있는지 확인
}

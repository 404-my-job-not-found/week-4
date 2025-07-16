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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null; // 배열이 비어있으면 null 반환

  if (nums.length === 1) {
    return new TreeNode(nums[0]); // 배열에 하나의 요소만 있으면 해당 값을 가진 노드 반환
  }

  // 중간 인덱스를 계산
  const mid = Math.floor(nums.length / 2);
  // 중간 값을 루트 노드로 설정
  const root = new TreeNode(nums[mid]);

  // 왼쪽 서브트리는 중간 인덱스 이전의 요소들로 구성
  root.left = sortedArrayToBST(nums.slice(0, mid));

  // 오른쪽 서브트리는 중간 인덱스 이후의 요소들로 구성
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root; // 완성된 이진 검색 트리 반환
}

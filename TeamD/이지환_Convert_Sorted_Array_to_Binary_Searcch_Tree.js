/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
    // 1. 빈 배열이면 null 반환
    if (nums.length === 0) return null;

    // 2. 중간 인덱스 찾기
    const mid = Math.floor(nums.length / 2);

    // 3. 중간 값으로 새 노드 생성
    const root = new TreeNode(nums[mid]);

    // 4. 왼쪽 서브트리 생성 (mid 이전 값들)
    root.left = sortedArrayToBST(nums.slice(0, mid));

    // 5. 오른쪽 서브트리 생성 (mid 이후 값들)
    root.right = sortedArrayToBST(nums.slice(mid + 1));

    return root;
};

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

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
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val
		this.left = left === undefined ? null : left
		this.right = right === undefined ? null : right
	}
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
	if (nums.length === 0) return null

	const mid = Math.floor(nums.length / 2)
	const root = new TreeNode(nums[mid])

	root.left = sortedArrayToBST(nums.slice(0, mid)) // 왼쪽 절반
	root.right = sortedArrayToBST(nums.slice(mid + 1)) // 오른쪽 절반

	// 구현은 비워둠
	return root
}

// ✅ 사용 예시 (출력 예시는 예측된 값임)
const root = sortedArrayToBST([-10, -3, 0, 5, 9])

// 예상 출력 (이건 콘솔 결과임, 실제 구현에 따라 달라질 수 있음)
console.log(root)

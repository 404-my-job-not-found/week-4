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

function isSymmetric(root: TreeNode | null): boolean {
	return isMirror(root?.left, root?.right)
}

function isMirror(t1: TreeNode | null, t2: TreeNode | null): boolean {
	if (!t1 && !t2) return true
	if (!t1 || !t2) return false
	if (t1.val !== t2.val) return false

	return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left)
}

// 대칭 트리 생성
const root = new TreeNode(
	1,
	new TreeNode(2, new TreeNode(3), new TreeNode(4)),
	new TreeNode(2, new TreeNode(4), new TreeNode(3))
)

console.log("Inorder Traversal:", isSymmetric(root))

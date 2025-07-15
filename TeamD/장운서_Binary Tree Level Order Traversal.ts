function levelOrder(root: TreeNode | null): number[][] {
	const result: [] = []

	helper(root, 0, result)
	return result
}

function helper(node: TreeNode | null, depth: number, result: number[][]) {
	if (!node) return
	if (!result[depth]) {
		result[depth] = []
	}
	result[depth].push(node.val)

	helper(node.left, depth + 1, result)
	helper(node.right, depth + 1, result)
}

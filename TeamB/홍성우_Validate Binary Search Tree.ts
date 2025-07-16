function isValidBST(root: TreeNode | null): boolean {
  function helper(node: TreeNode | null, min: number, max: number): boolean {
    if (!node) return true;

    if (node.val <= min || node.val >= max) return false;

    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  }

  return helper(root, -Infinity, Infinity);
}

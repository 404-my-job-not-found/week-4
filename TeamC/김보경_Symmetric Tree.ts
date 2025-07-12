// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return true;

  function isCheckingMirror(
    left: TreeNode | null,
    right: TreeNode | null
  ): boolean {
    if (!left && !right) return true;

    if (!left || !right) {
      return false;
    }
    if (left.val !== right.val) {
      return false;
    }

    return (
      isCheckingMirror(left.left, right.right) &&
      isCheckingMirror(left.right, right.left)
    );
  }

  return isCheckingMirror(root.left, root.right);
}

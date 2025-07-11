//in-order traversal 중위 순회

function isValidBST(root: TreeNode | null): boolean {
  const result: TreeNode[] = [];
  let current = root;
  let prev: number | null = null;

  while (result.length > 0 || current !== null) {
    while (current !== null) {
      result.push(current);
      current = current.left;
    }

    current = result.pop()!;

    if (prev !== null && current.val <= prev) {
      return false;
    }

    prev = current.val;
    current = current.right;
  }

  return true;
}

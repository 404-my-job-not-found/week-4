function levelOrder(root: TreeNode | null): number[][] {
  const result = [];

  if (!root) return result;

  const queue = [];
  queue.push(root);

  while (queue.length > 0) {
    const subResult = [];
    const size = queue.length;

    for (let i = 0; i < size; ++i) {
      const node = queue.shift();
      subResult.push(node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    result.push(subResult);
  }

  return result;
}

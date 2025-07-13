function levelOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return [];
  }

  const result: number[][] = [];
  const queue: TreeNode[] = [];

  queue.push(root);

  while (queue.length > 0) {
    const currentLength = queue.length;
    const currentLevel: number[] = [];

    for (let i = 0; i < currentLength; i++) {
      const node = queue.shift();
      currentLevel.push(node.val);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }

    result.push(currentLevel);
  }

  return result;
}

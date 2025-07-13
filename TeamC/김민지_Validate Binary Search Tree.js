var isValidBST = function (root) {
  let previous = null;

  function dfs(node) {
    if (!node) {
      return true;
    }

    if (!dfs(node.left)) {
      return false;
    }

    if (previous !== null && node.val <= previous) {
      return false;
    }

    previous = node.val;

    return dfs(node.right);
  }

  return dfs(root);
};

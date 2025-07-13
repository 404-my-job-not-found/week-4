var isSymmetric = function (root) {
  if (root === null) {
    return true;
  }

  function isMirror(left, right) {
    if (left === null && right === null) {
      return true;
    }

    if (left === null || right === null) {
      return false;
    }

    if (left.val !== right.val) {
      return false;
    }

    const leftMirror = isMirror(left.left, right.right);
    const rightMirror = isMirror(left.right, right.left);

    return leftMirror && rightMirror;
  }

  return isMirror(root.left, root.right);
};

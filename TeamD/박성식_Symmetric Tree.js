const leftRightCheck = (left, right) => {
  if (left === null && right === null) return true;
  if (left === null || right === null) return false;
  if (left.val !== right.val) return false;

  return (
    leftRightCheck(left.left, right.right) &&
    leftRightCheck(left.right, right.left)
  );
};

var isSymmetric = function (root) {
  if (root === null) return true;

  return leftRightCheck(root.left, root.right);
};

var isSymmetric = function (root) {
  if (!root) return true;
  return isSymmetric2(root.left, root.right);
};

const isSymmetric2 = (left, right) => {
  if (left == null && right == null) return true;
  if (left == null || right == null) return false;
  if (left.val !== right.val) return false;
  return (
    isSymmetric2(right.left, left.right) && isSymmetric2(left.left, right.right)
  );
};

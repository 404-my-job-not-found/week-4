const isValidBST = (root, min, nax) => {
  if (root === null) return true;

  if (min !== null && min <= root.val) return false;
  if (max !== null && max >= root.val) return false;

  return (
    isValidBST(root.left, root.val, max) &&
    isValidBST(root.right, min, root.val)
  );
};

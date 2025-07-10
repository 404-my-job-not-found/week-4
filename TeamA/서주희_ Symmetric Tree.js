var isSymmetric = function (root) {
  const leftSubTree = [];
  const rightSubTree = [];

  const checkLeftToRight = (current) => {
    if (current?.val !== undefined) {
      leftSubTree.push(current.val);
    } else {
      leftSubTree.push('x');
      return;
    }

    checkLeftToRight(current.left);
    checkLeftToRight(current.right);
  };

  const checkRightToLeft = (current) => {
    if (current?.val !== undefined) {
      rightSubTree.push(current.val);
    } else {
      rightSubTree.push('x');
      return;
    }

    checkRightToLeft(current.right);
    checkRightToLeft(current.left);
  };

  checkLeftToRight(root);
  checkRightToLeft(root);

  return leftSubTree.join('') === rightSubTree.join('');
};

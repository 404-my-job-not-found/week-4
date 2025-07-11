var sortedArrayToBST = function (nums) {
  const length = nums.length;
  const rootIndex = Math.floor(length / 2);
  const rootNode = new TreeNode(nums[rootIndex], null, null);

  const makeNodes = (parentNode, min, max, isLeft) => {
    if (min > max) {
      return;
    }

    const index = Math.floor((min + max) / 2);
    const childNode = new TreeNode(nums[index], null, null);
    console.log(parentNode, childNode);

    if (isLeft) {
      parentNode.left = childNode;
    } else {
      parentNode.right = childNode;
    }

    makeNodes(childNode, min, index - 1, true);
    makeNodes(childNode, index + 1, max, false);
  };
  makeNodes(rootNode, 0, rootIndex - 1, true);
  makeNodes(rootNode, rootIndex + 1, length - 1, false);

  return rootNode;
};

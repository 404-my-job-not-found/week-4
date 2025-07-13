var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }

  function bst(nums, startIndex, endIndex) {
    if (startIndex > endIndex) {
      return null;
    }

    let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    let currentNode = new TreeNode(nums[middleIndex]);

    currentNode.left = bst(nums, startIndex, middleIndex - 1);
    currentNode.right = bst(nums, middleIndex + 1, endIndex);

    return currentNode;
  }

  return bst(nums, 0, nums.length - 1);
};

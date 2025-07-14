function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;
  if (nums.length === 1) return new TreeNode(nums[0]);

  const middleIndex = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[middleIndex]);
  root.left = sortedArrayToBST(nums.slice(0, middleIndex));
  root.right = sortedArrayToBST(nums.slice(middleIndex + 1, nums.length));

  return root;
};

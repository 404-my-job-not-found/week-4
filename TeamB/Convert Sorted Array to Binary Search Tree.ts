class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// 오름차수로 nums가 주어지면 그에 맞춰서 이진 트리를 만들어야 되는 문제입니다
// 아주 친절하게도 sorting을 해주네요
// 중간 값이 root가 되어야 되니 Math.floor(nums.length / 2)를 해서 root로 지정해주고
// left, right에 알맞는 값을 slice로 잘라주고 재귀로 반복해주면 됩니다

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null;

  const midIndex = Math.floor(nums.length / 2);

  return new TreeNode(
    nums[midIndex],
    sortedArrayToBST(nums.slice(0, midIndex)),
    sortedArrayToBST(nums.slice(midIndex + 1))
  );
}

console.log(sortedArrayToBST([-10, -3, 0, 5, 9, 29]));
console.log(sortedArrayToBST([1, 3]));
console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

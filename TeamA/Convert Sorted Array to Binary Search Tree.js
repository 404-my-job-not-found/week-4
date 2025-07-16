/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// input은 그냥 숫자 배열임 -> 이거를 node의 val이라고 생각해서 이진트리를 만들라는 뜻이었음.. 릿코드는 왤케 인풋아웃풋이 헷갈리지
// height-balanced: 양쪽 높이 차이가 1 이하여야... -> 반띵해서 양 옆으로 준다고 생각하면 됨
// 주어진 배열을 그냥 반으로 잘라서 가운데 숫자를 root의 val에 넣고
// 왼쪽에는 반 잘린 것의 앞 부분을 넣고, 오른쪽에는 반 잘린 것의 뒷 부분을 넣으면 되겠네 -> 이 부분이 점점 작아지면서 반복 -> 재귀
var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  const mid = Math.floor(nums.length / 2); // 만약 nums들이 홀수면 문제 없는데, 짝수인 경우 복수정답이 생김
  const root = new TreeNode(nums[mid]); // constructor 어딨는지 모르겠지만 이렇게 하면 된다고 지피티가 알려줌 ㅠ

  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// helper 기법 까먹어서 개헤맴..
// 모든 노드가 내 상위 노드들이랑 범위 비교해가면서 유효한지 확인해야됨
// 그런데 input으로 root만 받음 -> 범위도 비교하기 위해 helper 기법 사용
// ul, ll은 범위의 상한선과 하한선 -> 얘 계속 가지고 다녀야 함

var isValidBST = function (root) {
  function helper(node, ll, ul) {
    if (!node) return true;

    if (node.val <= ll || node.val >= ul) return false;

    return helper(node.left, ll, node.val) && helper(node.right, node.val, ul);
  }

  return helper(root, -Infinity, Infinity);
};

// 사실 아래처럼 써도 됨
// function isValidBST(root, lower = -Infinity, upper = Infinity) {
//   if (!root) return true;

//   if (root.val <= lower || root.val >= upper) return false;

//   return (
//     isValidBST(root.left, lower, root.val) &&
//     isValidBST(root.right, root.val, upper)
//   );
// }

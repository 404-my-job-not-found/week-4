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
// 이것도 함수의 입력으로는 root만 들어오고,
// 그런데 반전의 비교 계산을 해야 함 -> helper 함수를 쓰면 편하겠네
// return은 방금 전 문제랑 똑같이 helper()를 하면 되게끔 구조를 짜고 싶은디.. -> helper를 구성하는 게 관건
// 뭔가 -1, 1 개념을 사용하면 쉽게 반전시킬 수 있을 것 같다.. 라고 생각했지만
// 어차피 노드 기반이라 if(.right == .left) 비교하는 게 낫다
var isSymmetric = function (root) {
  function helper(t1, t2) {
    if (!t1 && !t2) return true; // 둘 다 null이면 바로 true
    if (!t1 || !t2) return false; // 둘 중 하나만 null이면 반전 아니니까 바로 false
    if (t1.val !== t2.val) return false; // 둘 다 있는데 값이 다르면 false

    // 그런데 이제 비교를 left의 left ↔ right의 right 끼리 하고
    // 또 left의 right ↔ right의 left 끼리 해야하는 ....
    return helper(t1.left, t2.right) && helper(t1.right, t2.left);
  }

  return helper(root.left, root.right);
};

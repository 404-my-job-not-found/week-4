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
var isSymmetric = function(root) {

    const isMirror = (left, right) => {
        // 예외처리
        // 둘 다 null이면 true
        // 하나만 null이면 false
        if(left === null && right === null) return true;
        if(left === null || right === null) return false;

        // 둘 다 있는 경우
        // 노드의 값이 같고, 왼쪽 오른쪽이 반대여야 한다

        return left.val === right.val && isMirror(left.left, right.right) && isMirror(left.right, right.left);
    
    }
    
    return isMirror(root.left, root.right);
};
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
var isValidBST = function(root) {
    // min, max 값을 넘겨주면서 트리를 순회하면서 검증


    // 트리의 노드를 순회하면서 검증하는 함수
    const validateNode = (node, min, max) => {
        // 노드가 없으면 참
        if (!node) return true;

        // 노드의 값이 min, max 값 사이에 있지 않으면 거짓
        if (node.val <= min || node.val >= max) {
            return false;
        }
        
        // &&
        // 왼쪽 노드는 min, 현재 노드의 값 사이에 있어야 하고, 오른쪽 노드는 현재 노드의 값, max 사이에 있어야 한다.
        return validateNode(node.left, min, node.val) && validateNode(node.right, node.val, max);
    };

    // 루트 노드부터 시작하여 검증
    return validateNode(root, -Infinity, Infinity);
};
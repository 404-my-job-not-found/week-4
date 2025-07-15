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
var isValidBST = function (root) {
    return validate(root, null, null);
};

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

let root = new TreeNode(
    5,
    new TreeNode(3, new TreeNode(1), new TreeNode(4)),
    new TreeNode(7)
);

function validate(node, min, max) {
    if (node === null) return true;
    if (min !== null && node.val <= min) return false;
    if (max !== null && node.val >= max) return false;
    return (
        validate(node.left, min, node.val) &&
        validate(node.right, node.val, max)
    );
}

console.log(isValidBST(root));

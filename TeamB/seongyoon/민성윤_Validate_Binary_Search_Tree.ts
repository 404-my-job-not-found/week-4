/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

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

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;
  const queue: { root: TreeNode; min: number; max: number }[] = [
    { root, min: -Infinity, max: Infinity },
  ];

  while (queue.length) {
    const node = queue.shift();
    if (!node) continue;

    const { root, min, max } = node;

    if (root.val <= min || root.val >= max) return false;
    if (root.left) queue.push({ root: root.left, min, max: root.val });
    if (root.right) queue.push({ root: root.right, min: root.val, max });
  }
  return true;
}

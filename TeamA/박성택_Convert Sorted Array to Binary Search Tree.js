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
var sortedArrayToBST = function(nums) {
    // console.log(nums);
    // 우선 오름차순..? X
    // 재귀 사용

    const dfs = (left, right) => {
        if(left > right) return null;
        // 중간값을 기준으로!
        const mid = Math.floor((left + right) / 2);
        // 노드 생성
        const node = new TreeNode(nums[mid]);
        // console.log(left, right, mid, node);
        // 0 4 2 [0]
        // 0 1 0 [-10]
        // 1 1 1 [-3]
        // 3 4 3 [5]
        // 4 4 4 [9]
        
        // 왼쪽 자식 생성
        node.left = dfs(left, mid - 1);
        // 오른쪽 자식 생성
        node.right = dfs(mid + 1, right);

        return node;
    }

    // 초기 노드부터       
    return dfs(0, nums.length - 1);
};
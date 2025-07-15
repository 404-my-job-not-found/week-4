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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // BFS - 너비 우선 탐색 사용해라
    // root 는 TreeNode 임을 생각해라
    // 초기값에 root는 TreeNode(3)

    // const result = [];
    // if (!root) return result;

    // const queue = [root];

    // while (queue.length > 0) {
    //     const levelSize = queue.length;   // 현재 레벨에 있는 노드 수
    //     const level = [];                 // 현재 레벨 노드 값 저장

    //     for (let i = 0; i < levelSize; i++) {
    //         const node = queue.shift();     // 큐에서 꺼냄
    //         level.push(node.val);           // 값 저장
    //         // console.log(node.val, i, levelSize);

    //         if (node.left) queue.push(node.left);   // 왼쪽 자식 추가
    //         if (node.right) queue.push(node.right); // 오른쪽 자식 추가
    //     }
    //     // console.log(level, queue);
    //     result.push(level);               // 현재 레벨 완료
    // }

    // return result;


    // DFS - 깊이 우선 탐색
    const result = [];
    if(!root) return result;

    // 재귀 함수 사용
    const dfs = (node, level) => {
        // 예외처리
        if(!node) return;

        // 현재 레벨이 결과 배열의 길이보다 크면 새로운 레벨 추가
        if(level === result.length) result.push([]);

        // 현재 노드의 값을 해당 레벨에 추가
        result[level].push(node.val);

        // 자식 탐색
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    };

    // 루트부터
    dfs(root, 0);

    return result;
};
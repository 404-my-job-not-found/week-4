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

/**
 * 이 문제는 레벨 별로 노드를 탐색하는 문제인 것 같습니다
 * 레벨 별로 탐색을 해야되기 때문에 BFS 방식으로 풀었고 BFS는 queue에서 선입선출해야 되는 것으로 알고있어
 * 먼저 queue에 root를 넣고 탐색을 시작하게 구성했고 기저 조건으론 queue가 비어있으면 탐색을 종료하게 했습니다
 * 탐색을 시작하면 queue에서 첫 번째 노드를 꺼내서 현재 노드를 탐색하고 현재 노드의 값을 result에 추가하는 방식으로 풀었습니다.
 */

// 첫 번째 시도
// 현재 노드의 값을 result에 추가하고 왼쪽 노드와 오른쪽 노드를 queue에 추가하는 방식으로 풀었는데
// [ [ 3 ], [ 9 ], [ 20 ], [ 15 ], [ 7 ] ]
// 배열이 각각 레벨 별로 출력되는 것이 아니라 result.push([current.val]); 부분에서 레벨별로 묶이질 않고 각각 푸시가 되어
// 실패했습니다..

const levelOrder_fail = (root: TreeNode | null): number[][] => {
  if (!root) return [];
  const result: number[][] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length > 0) {
    const current = queue.shift(); // queue에서 첫 번째 노드를 꺼냄
    if (current) {
      result.push([current.val]); // 현재 노드의 값을 result에 추가
      if (current.left) queue.push(current.left); // 왼쪽 노드가 있으면 왼쪽 노드를 queue에 추가
      if (current.right) queue.push(current.right); // 오른쪽 노드가 있으면 오른쪽 노드를 queue에 추가
    }
  }
  return result;
};

// 두 번째 시도
// 첫 번째 방법에서 레벨 별로 묵어줄 배열만 추가해줬습니다
// 음 근데 여기서 묶이는게 달라서 문제가 생겼습니다
// Output: [[3,9],[20,15],[7]]
// Expected: [[3],[9,20],[15,7]]
// 레벨별로 묶이는게 아니라 지맘대로 묶여버렸습니다.

const levelOrder_fail2 = (root: TreeNode | null): number[][] => {
  if (!root) return [];
  const result: number[][] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length > 0) {
    const level: number[] = [];

    for (let i = 0; i < queue.length; i++) {
      const current = queue.shift();
      if (current) {
        level.push(current.val);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
    }
    result.push(level);
  }
  return result;
};

// 세번째 시도
// 뭐가 문제인지 이것 저것 해보다가 queue.length가 루프 중간에 계속해서 변하는걸 확인했습니다
// 처음에 queue.length가 = 2 (9, 20)이었다가 shift()로 9를 꺼내면 queue.length가 1이 되고 그 다음 루프에서
// 20의 자식들을 push 해주면 queue.length가 3이 되는 데 이렇게 변하는 것을 확인하고 루프 중간에 계속해서 변해서 지들 맘대로 묶여버렸던 것이었습니다
// 루프 돌릴 때 상수로 고정시켜 루프 돌릴 때마다 변하는 queue.length를 고려하지 않아도 되게 끔 풀었습니다

const levelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return [];
  const result: number[][] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length > 0) {
    const level: number[] = [];
    const levelSize = queue.length;

    for (let i = 0; i < levelSize; i++) {
      const current = queue.shift();
      if (current) {
        level.push(current.val);
        if (current.left) queue.push(current.left);
        if (current.right) queue.push(current.right);
      }
    }
    result.push(level);
  }
  return result;
};

console.log(levelOrder(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
console.log(levelOrder(new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))));
console.log(levelOrder(new TreeNode(1)));

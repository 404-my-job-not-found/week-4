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
 * 노드의 왼쪽 서브트리는 작은 값이여야하고, 오른쪽 서브트리는 큰값이여야 한다고 합니다
 * root는 탐색중인 노드라고 생각했을 때 재귀를 사용하면 쉽게 풀 수 있을 거 같아 재귀를 사용했습니다.
 */

/**
 *
 * 첫 번째 시도
 * 왼쪽 서브트리는 작은 값, 오른쪽 서브트리는 큰값이여야 한다고 합니다
 * 간단한 조건문으로 풀어보려 했는데
 * [0]인 케이스에서 true를 return 해야 되는데 false를 return 실패했습니다
 * 여러가지 조건을 추가해서 넣어봤지만 여러 엣지 케이스에서 걸려서 실패했습니다
 * 음 이건 문제에 없었는데... BST 자체에 개념을 처음 봐서 BST 먼저 학습을 한 후에 다시 풀어봤습니다.
 * 우선 중복된 키는 허용하지 않는다는점을 안된다고 합니다. 왜 문제엔 안적어 놨지
 * */
// function isValidBST(root: TreeNode | null): boolean {
//   if (!root || !root.left || !root.right) return false;

//   if (root.val < root.left!.val) return false;
//   if (root.val > root.right!.val) return false;

//   return true;
// }

/**
 * 두 번째 시도
 * 최소값과 최대값을 넘겨주면서 재귀를 활용해서 풀었습니다
 * 기저 조건은 root가 null일 때, 리프 노드일 때 true를 return 하게 조건을 줬고,
 * 범위는 제약 범위가 -2³¹ ≤ Node.val ≤ 2³¹ - 1 이기 때문에 제약 조건보다 1씩 더 크고 작게 잡아줬습니다
 *
 * 왼쪽 자식은 현재 노드보다 작아야 하니까, max를 root.val로 제한하고 (탐색 노드, min, 현재 노드 값)
 * 오른쪽 자식은 현재 노드보다 커야 하니까, min을 root.val로 제한하고 (탐색 노드, 현재 노드 값, max)
 * 그러므로 이 조건이 아닐 경우엔 false를 return 하게 조건을 줬습니다.
 *
 * 왼쪽과 오른쪽 서브트리 모두 유효한 BST여야 하므로 AND 연산자로 연결해서
 * 둘 다 true일 때만 전체가 유효한 BST가 되도록 했습니다
 *
 */

/**
 * 이런 트리 구조에서 동작을 단계로 표현하자면 
              50
            /    \
          30      70
        /  \    /  \
      20   40  60   80
      /              \
    10               90
  /                   \
5                   100

(탐색 노드, 최소 값, 최대 값) 이렇게 표현했습니다

 * 1단계: (50, -2³¹, 2³¹) -> 루트 노드 탐색
 ************************************************
 * 2단계: (30, -2³¹, 50) || (40, 30, 50)
 * 3단계: (20, -2³¹, 30) 
 * 4단계: (10, -2³¹, 20) 
 * 5단계: (5, -2³¹, 10)
 * 왼쪽 탐색 끝 -> 오른쪽 탐색 시작
 * 6단계: (70, 50, 2³¹)
 * 7단계: (60, 50, 70) || (80, 50, 2³¹)
 * 8단계: (90, 50, 2³¹)
 * 9단계: (100, 50, 2³¹)
 * 
 * 이렇게 해도 이해하기가 어렵군요 그림을 그려가며 해보시는 것을 추천합니다..
 */

/**
 *
 * @param root 현재 노드
 * @param min 왼쪽 서브트리의 최소값
 * @param max 오른쪽 서브트리의 최대값
 * @returns 현재 노드가 BST인지 여부
 */
function isValidBST(root: TreeNode | null, min: number = -Math.pow(2, 31) - 1, max: number = Math.pow(2, 31)): boolean {
  if (!root) return true;

  if (root.val <= min || root.val >= max) return false;

  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

const d = (root: TreeNode | null, min: number = -Infinity, max: number = Infinity): boolean =>
  !root
    ? true
    : root.val <= min || root.val >= max
    ? false
    : d(root.left, min, root.val) && d(root.right, root.val, max);

/**
 * 추가 설명
 * 중복 값은 BST가 아니라고 합니다.
 */

const node_1 = new TreeNode(2, new TreeNode(1), new TreeNode(3)); // true
const node_2 = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6))); // false
const node_3 = new TreeNode(0); // true
const node_4 = new TreeNode(1, new TreeNode(1)); // false (중복값은 BST가 아님)

console.log("answer: true:", isValidBST(node_1));
console.log("answer: false:", isValidBST(node_2));
console.log("answer: true:", isValidBST(node_3));
console.log("answer: false:", isValidBST(node_4));

console.log("answer: true:", d(node_1));
console.log("answer: false:", d(node_2));
console.log("answer: true:", d(node_3));
console.log("answer: false:", d(node_4));

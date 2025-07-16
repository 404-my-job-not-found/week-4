# Validate Binary Search Tree

Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

## 번역

이진 트리의 루트가 주어졌을 때, 그것이 유효한 이진 검색 트리(BST)인지 판단합니다.

유효한 BST는 다음과 같이 정의됩니다:

노드의 왼쪽 하위 트리에는 해당 노드의 키보다 작은 키를 가진 노드만 포함됩니다.
노드의 오른쪽 하위 트리에는 노드의 키보다 큰 키를 가진 노드만 포함됩니다.
왼쪽 및 오른쪽 하위 트리는 모두 이진 검색 트리여야 합니다.

## 예시

```
example 1

Input: root = [2,1,3]
Output: true
```

```
example 2

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

## 의식의 흐름
### STEP 1
- 조건에 대해 고민해보자.
- left 혹은 right 중 둘중 하나가 없다면 BST가 아님. (return false)
- val은 left보다 크고 right보다 작아야함. (continue)
- 순회가 끝날때까지 false가 없다면 올바른 BST라는 뜻. (return true);

```typescript
function isValidBST(root: TreeNode | null): boolean {
  if (!root) return true;
  const queue: (TreeNode | null)[] = [root];

  while (queue.length) {
    const node = queue.shift();
    if (!node) continue;
    if (node.left && node.left.val >= node.val) return false;
    if (node.right && node.right.val <= node.val) return false;
    queue.push(node.left, node.right);
  }
  return true;
}
```

### STEP 2
- 위 방식대로 하니 실패함. GPT를 이용해 문제점을 파악해보니 당장 현재 노드만 체크하는게 아닌 그 위 부모요소 와도 비교를 해야한다고 알려줌.
- 최소치와 최대치를 줌으로써 범위정보를 확실하게 주어 보다 정확한 체크를 진행해야한다고 함.
- 단, 초기에는 최대치와 최소치를 알 수 없기때문에 Infinity를 주어 극한의 최소와 극한의 최대의 값을 주고 다음 순회에서 바로 값을 갱신할 수 있게 해준다.

```typescript
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

```
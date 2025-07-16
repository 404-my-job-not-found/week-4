# Binary Tree Level Order Traversal
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

## 번역
이진 트리의 루트가 주어지면, 그 노드 값의 레벨 순서 순서를 반환합니다. (즉, 왼쪽에서 오른쪽으로, 레벨 단위로).

## 예시
```
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
```

```
example 2

Input: root = [1]
Output: [[1]]
```

```
example 3

Input: root = []
Output: []
```

## 의식의 흐름
### STEP 1
- 일단 2차원배열로 나오기때문에 초기에 빈 배열을 선언해줌.
- 이후 노드를 순회하며 같은 level의 노드 push 해줘야할듯
# Symmetric Tree

Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

## 번역

이진 트리의 루트가 주어졌을 때, 그 루트가 그 자체의 거울인지(즉, 중심을 중심으로 대칭인지) 확인합니다.

## 예시
```
example 1

Input: root = [1,2,2,3,4,4,3]
Output: true
```

```
example 2

Input: root = [1,2,2,null,3,null,3]
Output: false
```

## 의식의 흐름
### STEP 1
- left와 right의 val 값이 같은지 비교하여 boolean을 리턴..?하면 어떨까...
### STEP 2
- 문제를 어떻게 해결할지 다시 정리를 해보았습니다.
- 좌,우가 같은지 체크하려면 좌, 우 값을 체크하면서 순회 해야한다고 생각했습니다.
- 찾아보니 Queue를 이용한 방식이 있다고 합니다.

> Queue는 자료구조 개념중 하나로 First-In-First-Out(FIFO)형식을 갖는다.

- root의 left, right 를 Queue에 넣고 해당 Queue를 순회하며 좌,우 를 비교하고 한번이라도 대칭을 이루지 않을 경우 ```false```, 대칭일경우 ```continue``` 하며 순회합니다.
- 이후 다음 ```tree-level```을 체크하기위해 다음 ```tree```인 ```root.left.left```, ```root.right.right``` 그리고 ```root.left.right```, ```root.right.left``` 를 푸시하여 반복문을 진행합니다.
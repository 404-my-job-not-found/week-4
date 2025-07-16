# First Bad Version
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

## 번역
버전 1부터 n까지의 제품 버전이 있을 때, 어느 시점부터 버그가 발생하기 시작했는지 찾아라.
isBadVersion(version)이라는 API를 통해 해당 버전이 불량인지 확인할 수 있다.
모든 버전은 이전 버전 기반으로 만들어지므로, 한 번 불량이 시작되면 그 이후는 전부 불량이다.

## 예시
```
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
```

```
Input: n = 1, bad = 1
Output: 1
```

## 의식의 흐름
### STEP 1
- 1 ~ n 번째 중에 특정조건(isBadVersion === true) 를 만족하는 최솟값을 찾는 문제인듯
- 그러면 이진탐색으로 첫번째인덱스와 마지막인덱스에서 차근차근 순회하며 조건을 만족하는 가장작은값을 찾아 리턴.
/**
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.
Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.
You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.
 */

/**
 * 당신은 제품 관리자이며 현재 신제품 개발을 위해 팀을 이끌고 있습니다.
 * 안타깝게도 최신 버전의 제품이 품질 검사를 통과하지 못했습니다.
 * 각 버전은 이전 버전을 기반으로 개발되었기 때문에, 잘못된 버전 이후의 모든 버전도 잘못된 것입니다.
 * n개의 버전[1, 2, ..., n]이 있고, 첫 번째 잘못된 버전을 찾으려고 한다고 가정해 보겠습니다.
 * 그러면 이후의 모든 버전도 잘못된 버전이 됩니다. 버전의 오류 여부를 반환하는 bool isBadVersion(version) API가 주어집니다.
 * 첫 번째 잘못된 버전을 찾는 함수를 구현하세요. API 호출 횟수를 최소화해야 합니다.
 */

// 문제 이해가 잘 되지 않아서 고민이 좀 많았습니다.
// 애초에 클로저 패턴을 접해본지 오래된 것 같기도 하고,,,
// 우선 테스트 할 수 있게 isBadVersion 함수를 만들었습니다.
// version이 4이상이면 true를 주고 그이하는 false를 주게끔 만들어 시각화를 해봤습니다.
// output: [false, false, false, true, true]
function isBadVersion(version: number): boolean {
  return version >= 4;
}

// var solution = function (isBadVersion: any) {
//   return function (n: number): number[] {
//     const testArray = Array.from({ length: n }, (_, i) => i + 1);
//     return testArray.map(version => isBadVersion(version));
//   };
// };

// 첫 번째 시도
// 위 테스트 한 것을 토대로 만들어 보면 될 것 같습니다
// findIndex를 사용하여 처음에 true가 나오는 index를 찾고 원하는 값을 출력하도록 만들었습니다.
// findIndex는 원하는 값이 나오면 바로 종료하기 떄문에 문제에서 요구하는 API 호출 횟수를 최소화를 할 수 있지 않을까 싶습니다.
// 라고 생각했지만 n = 2126753390 , bad = 1702766719 일때 FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory가 떠서 fail입니다

// var solution = function (isBadVersion: any) {
//   return function (n: number): number {
//     const testArray = Array.from({ length: n }, (_, i) => i + 1);
//     return testArray.findIndex(version => isBadVersion(version)) + 1;
//   };
// };

// 두 번째 시도
// 스택오버플로우가 생기는 경우는 대부분 중간에서 반 자르고 확인하고 좌우 중 하나를 버리고 다시 확인하는 방식으로 푸는게 맞지 않을까 싶습니다
// 이진 탐색 알고리즘이 되겠군요
// 중간에서 반 자르려면 시작 부분과 끝부분이 필요하기 때문에 start와 end를 사용했고
// 우선 계속 반자르고 확인해야하니 while문을 사용하고 종료 조건은 start와 end가 같아지면 종료하도록 했습니다.
// 중간 값을 구하고 그 값이 true인지 false인지 확인하고 좌우 중 하나를 버리고 점점 좁혀가면서 찾아가는 방식입니다.

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let start = 1;
    let end = n;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }

    return start;
  };
};

console.log(solution(isBadVersion)(5));

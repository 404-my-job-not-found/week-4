var solution = function (isBadVersion: any) {
  return function (n: number): number {
    //연속되는 버전 번호
    let leftV = 1;
    let rightV = n;

    while (leftV < rightV) {
      const middle = Math.floor((leftV + rightV) / 2);
      if (isBadVersion(middle)) {
        rightV = middle;
      } else {
        // 오른쪽으로 이동
        leftV = middle + 1;
      }
    }

    return leftV;
  };
};
// 시간복잡도: O(log n)
// 공간복잡도: O(1)

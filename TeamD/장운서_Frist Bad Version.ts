/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const bad = 4
const isBadVersion = function (version: number): boolean {
	return version >= bad
}

const solution = function (isBadVersion: (version: number) => boolean) {
	return function (n: number): number {
		console.log()
		let left = 1
		let right = n
		while (left < right) {
			const mid = Math.floor((left + right) / 2)
			console.log(mid)
			if (isBadVersion(mid)) {
				right = mid
			} else {
				left = mid + 1
			}
		}

		return left
	}
}

const findFirstBadVersion = solution(isBadVersion)
console.log("First bad version:", findFirstBadVersion(5)) // => 4

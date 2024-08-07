[문제링크](https://www.acmicpc.net/problem/2193)

## 접근 방향 설명

> 0으로 끝나는 N번쨰 이친수의 갯수와 1로 끝나는 이친수의 갯수를 기반으로 다음 N+1 번째 이친수의 갯수를 구하는 문제!

```
// 1 -> 1
// 2 -> 10
// 3 -> 101 100
// 4 -> 1010 1001 1000
// 5 -> 10101 10100 10010 10001 10000
// 6 -> 101010 101001 101000 100101 100100 100010 100001 100000
```

---

```js
let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
let N = +fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

// 1 -> 1
// 2 -> 10
// 3 -> 101 100
// 4 -> 1010 1001 1000
// 5 -> 10101 10100 10010 10001 10000
// 6 -> 101010 101001 101000 100101 100100 100010 100001 100000

let dp = [...new Array(N + 1)].map(() => [...new Array(2)]);
dp[1][0] = 0; // 0으로 끝나는 이친수
dp[1][1] = 1; // 1로 끝나는 이친수

for (let n = 2; n <= N; n++) {
  dp[n][0] = BigInt(dp[n - 1][0]) + BigInt(dp[n - 1][1]); // 0과 1 구분없이, +'0' 가능
  dp[n][1] = BigInt(dp[n - 1][0]); // 11 이 반복될 수 없기 때문에, 0 뒤에만 + '1'
}

console.log(BigInt(dp[N][0] + dp[N][1]).toString());
```

---

## 풀이 과정에서 새롭게 느낀점(배운점)

메모리 초과 이슈로 꽤나 헤맸던 문제...
BigInt를 잊지 말자..

---

## 문제

0과 1로만 이루어진 수를 이진수라 한다. 이러한 이진수 중 특별한 성질을 갖는 것들이 있는데, 이들을 이친수(pinary number)라 한다. 이친수는 다음의 성질을 만족한다.

이친수는 0으로 시작하지 않는다.
이친수에서는 1이 두 번 연속으로 나타나지 않는다. 즉, 11을 부분 문자열로 갖지 않는다.
예를 들면 1, 10, 100, 101, 1000, 1001 등이 이친수가 된다. 하지만 0010101이나 101101은 각각 1, 2번 규칙에 위배되므로 이친수가 아니다.

N(1 ≤ N ≤ 90)이 주어졌을 때, N자리 이친수의 개수를 구하는 프로그램을 작성하시오.

## 입력

첫째 줄에 N이 주어진다.

## 출력

첫째 줄에 N자리 이친수의 개수를 출력한다.

## 예제 입력 1

3

## 예제 출력 1

2

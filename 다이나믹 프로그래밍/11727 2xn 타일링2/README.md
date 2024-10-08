[문제링크](https://www.acmicpc.net/problem/11727)

## 접근 방향 설명
> 점화식을 구해 dp 배열을 활용하는 문제였다!
**유도과정** 
```js
dp[1] = 1;
dp[2] = 3;
dp[3] = 5;
dp[4] = 11;
// ...
```

**점화식**
```js
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
```


---


```js
let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
let N = +fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

let dp = [];
dp[1] = 1;
dp[2] = 3;
dp[3] = 5;

for (let i = 4; i <= N; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2] * 2) % 10007;
}

console.log(dp[N] % 10007);
```

---

## 풀이 과정에서 새롭게 느낀점(배운점)

정답률이 높았던 문제였긴 하지만, 나름 빠르게 풀어내서 기분 좋았던 문제!

---

## 문제
2×n 직사각형을 1×2, 2×1과 2×2 타일로 채우는 방법의 수를 구하는 프로그램을 작성하시오.

아래 그림은 2×17 직사각형을 채운 한가지 예이다.

## 입력
첫째 줄에 n이 주어진다. (1 ≤ n ≤ 1,000)

## 출력
첫째 줄에 2×n 크기의 직사각형을 채우는 방법의 수를 10,007로 나눈 나머지를 출력한다.

## 예제 입력 1 
2
## 예제 출력 1 
3

## 예제 입력 2 
8

## 예제 출력 2 
171
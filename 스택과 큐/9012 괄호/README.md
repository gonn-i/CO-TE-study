[문제링크](https://www.acmicpc.net/problem/9012)

## 접근 방향 설명

> 스택을 활용하여 괄호 짝 맞춰주기 
> 1️⃣ '(' 인 경우 temp push
> 2️⃣ ')' 인 경우, temp 배열 안에 여는 괄호가 없다면 (pop 후), push 
> 3️⃣ 최종적으로 temp 가 비워지지 않으면 NO, 아니면 YES 

## 풀이 코드 해석

```java script
let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
let input = fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split('\n');

let T = +input.shift();
let cases = [];
let ans = [];

for (let i = 0; i < T; i++) {
  cases[i] = input[i].split('');
}

for (let i = 0; i < T; i++) {
  let temp = [];
  for (let j = 0; j < cases[i].length; j++) {
    if (cases[i][j] == '(') temp.push(cases[i][j]);
    else {
      if (temp.pop() !== '(') {
        temp.push(cases[i][j]);
        break;
      }
    }
  }
  temp.length !== 0 ? ans.push('NO') : ans.push('YES');
}

console.log(ans.join('\n'));
```

## 풀이 과정에서 새롭게 느낀점(배운점)

사실 골드 풀다가 안 풀려서 실버 4로 내려와 기분 전환 하는 나란 사람.. (내일은 꼭 다시 도전해서 풀어야지 )

그래도 올해 초에 처음 백준 접하고 문제 풀었을때는 실버도 어느정도 시간이 걸렸는데 이전 쉽게 쳐내는 것 같아 대견하다 🤨

---

## 문제
괄호 문자열(Parenthesis String, PS)은 두 개의 괄호 기호인 ‘(’ 와 ‘)’ 만으로 구성되어 있는 문자열이다. 그 중에서 괄호의 모양이 바르게 구성된 문자열을 올바른 괄호 문자열(Valid PS, VPS)이라고 부른다. 한 쌍의 괄호 기호로 된 “( )” 문자열은 기본 VPS 이라고 부른다. 만일 x 가 VPS 라면 이것을 하나의 괄호에 넣은 새로운 문자열 “(x)”도 VPS 가 된다. 그리고 두 VPS x 와 y를 접합(concatenation)시킨 새로운 문자열 xy도 VPS 가 된다. 예를 들어 “(())()”와 “((()))” 는 VPS 이지만 “(()(”, “(())()))” , 그리고 “(()” 는 모두 VPS 가 아닌 문자열이다. 

여러분은 입력으로 주어진 괄호 문자열이 VPS 인지 아닌지를 판단해서 그 결과를 YES 와 NO 로 나타내어야 한다. 

## 입력
입력 데이터는 표준 입력을 사용한다. 입력은 T개의 테스트 데이터로 주어진다. 입력의 첫 번째 줄에는 입력 데이터의 수를 나타내는 정수 T가 주어진다. 각 테스트 데이터의 첫째 줄에는 괄호 문자열이 한 줄에 주어진다. 하나의 괄호 문자열의 길이는 2 이상 50 이하이다. 

## 출력
출력은 표준 출력을 사용한다. 만일 입력 괄호 문자열이 올바른 괄호 문자열(VPS)이면 “YES”, 아니면 “NO”를 한 줄에 하나씩 차례대로 출력해야 한다. 

## 예제 입력 1 
6
(())())
(((()())()
(()())((()))
((()()(()))(((())))()
()()()()(()()())()
(()((())()(

## 예제 출력 1 
NO
NO
YES
NO
YES
NO
[문제링크](https://www.acmicpc.net/problem/1436)

## 접근 방향 설명

> 브루트 포스 (= 무식하게 돌려봄)
> 알고리즘의 정의에 따라 성실하게 반복문과 조건문으로 걸러내도록 풀어내었다.

> 666에서 +1씩 계속해서 증가하되, 이제 '666'이 존재하는 경우 (6이 연속으로 3번 이상 등장하는 경우) order를 증가했다.
> 이때, order와 input으로 받은 순서와 일치하는 경우에 serise 값을 리턴했다.

---

## 풀이 코드 해석

```java script
let fs = require('fs');
let filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
let input = +fs
  .readFileSync(__dirname + filePath)
  .toString()
  .trim();

let order = 1;
let serise = '666';

function Naming(end) {
  while (1) {
    if (serise.toString().includes('666')) {
      if (order == end) {
        return serise;
      }
      order++;
    }
    serise++;
  }
}

console.log(Naming(input));
```

---

## 풀이 과정에서 새롭게 느낀점(배운점)

브루트 포스를 처음 풀어보았는데, 처음엔 규칙을 찾기 위해서 전전긍긍했다. 규칙을 찾기란 쉽지 않았고, 알고리즘이 브루트 포스로 분류된 것을 참고하여, 반복문으로 숫자를 증가시켜가면서 break 포인트를 잡아 해교결하였다!

코테 기출을 살펴보니 완전탐색은 거의 필수이기 때문에 앞으로 많이많이 접해보고 익숙해져야겠다!

---

## 문제

666은 종말을 나타내는 수라고 한다. 따라서, 많은 블록버스터 영화에서는 666이 들어간 제목을 많이 사용한다. 영화감독 숌은 세상의 종말 이라는 시리즈 영화의 감독이다. 조지 루카스는 스타워즈를 만들 때, 스타워즈 1, 스타워즈 2, 스타워즈 3, 스타워즈 4, 스타워즈 5, 스타워즈 6과 같이 이름을 지었고, 피터 잭슨은 반지의 제왕을 만들 때, 반지의 제왕 1, 반지의 제왕 2, 반지의 제왕 3과 같이 영화 제목을 지었다. 하지만 숌은 자신이 조지 루카스와 피터 잭슨을 뛰어넘는다는 것을 보여주기 위해서 영화 제목을 좀 다르게 만들기로 했다.

종말의 수란 어떤 수에 6이 적어도 3개 이상 연속으로 들어가는 수를 말한다. 제일 작은 종말의 수는 666이고, 그 다음으로 큰 수는 1666, 2666, 3666, .... 이다. 따라서, 숌은 첫 번째 영화의 제목은 "세상의 종말 666", 두 번째 영화의 제목은 "세상의 종말 1666"와 같이 이름을 지을 것이다. 일반화해서 생각하면, N번째 영화의 제목은 세상의 종말 (N번째로 작은 종말의 수) 와 같다.

숌이 만든 N번째 영화의 제목에 들어간 수를 출력하는 프로그램을 작성하시오. 숌은 이 시리즈를 항상 차례대로 만들고, 다른 영화는 만들지 않는다.

## 입력

첫째 줄에 N이 주어진다. N은 10,000보다 작거나 같은 자연수이다.

## 출력

첫째 줄에 N번째 영화의 제목에 들어간 수를 출력한다.

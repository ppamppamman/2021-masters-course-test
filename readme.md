# 루빅스 큐브 구현

---

### 1단계 프로젝트 실행 및 사용

- 실행

```
npm start
```

- 사용

```
> apple 3 L
leapp

> banana 6 R
banana

> carrot -1 r
arrotc

> cat -4 R
atc
```

---

## 과제 설명

### 1단계: 단어 밀어내기 구현하기

1. 입력: 사용자로부터 단어 하나, 정수 숫자 하나( -100 <= N < 100) , L 또는 R을 입력받는다. L 또는 R은 대소문자 모두 입력 가능하다.
2. 주어진 단어를 L이면 주어진 숫자 갯수만큼 왼쪽으로, R이면 오른쪽으로 밀어낸다.
3. 밀려나간 단어는 반대쪽으로 채워진다.

### 입력 및 출력 예시

홀수 줄은 입력, 짝수 줄은 출력이다.

```
> apple 3 L
leapp

> banana 6 R
banana

> carrot -1 r
arrotc

> cat -4 R
atc
```

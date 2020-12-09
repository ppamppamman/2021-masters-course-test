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

## 과제 구현 설명

### 프로세스

- readline을 통해 커맨드를 입력받는다.
- 입력받는 커맨드의 오류를 확인한다.
  - 만약 오류라면, 오류임을 밝히고 다시 진행하게 한다.
  - 만약 오류가 아니라면, 글자 변경을 진행한다.
    - 이 때 입력받은 문자열 중 횟수를 의미하는 숫자가 음수라면 숫자를 양수로 바꾸고 방향을 반대로 변경하여 진행하도록 한다.

### 코드 설명

app.js

- input()  
  readline을 활용해 유저의 입력을 받는다.  
  @returns {Promise<string>}

- correction()  
  count가 음수일 때만 실행되며, count 값을 양수로 바꾸고 direction을 반대 방향으로 바꾼다.  
  @params {string} count  
  @params {direction} direction  
  @returns {array<number|string>}

- push()  
  direction을 검사하여 count의 절대값만큼 word 밀기 작업을 진행한다.  
  @param {string} word  
  @param {string} count  
  @param {string} direction  
  @returns {string}

- isWrongCommand()  
  입력받은 문자열의 포맷에 오류가 있는지 검사한다.  
  @param {Array<string>} inputCommands  
  @returns {boolean}

- init()  
  실행에 필요한 함수이며, 문자열 입력 과정부터 변환 과정까지를 진행시키며, 종료커맨드 (Ctrl+C)가 input 될 때까지 반복하도록 한다.

---

## 주어진 과제 설명

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

# 루빅스 큐브 구현

---

## 3단계 프로젝트 실행 및 사용

- 실행

```
npm start
```

- 사용

```
R R W
G C W
G B B

CUBE> U
U
R W R
G C W
G B B

CUBE> R'L'
R'
R W B
G C R
G B W

L'
G W B
G C R
R B W

CUBE> Q
Bye~
```

---

## 과제 구현 설명

### 프로세스

- readline을 통해 커맨드를 입력받는다.
- 입력받는 커맨드를 파싱하여 작은 따옴표 커맨드를 올바르게 처리하며, 오류를 검사한다.
- 커맨드 순서대로 큐브를 작동시킨다. 작동방식은 주어진 과제 요구사항을 따르도록 한다.

### 코드설명

app.js

- input()  
  readline을 활용해 유저의 입력을 받는다.  
  @returns {Promise}

- parseCommand()  
  입력받은 커맨드를 올바르게 Array로 바꾼다.  
  @param {string} inputCommands  
  @returns {Array<string>}

- isWrongCommand()  
  입력받은 문자열의 포맷에 오류가 있는지 검사한다.  
  @param {Array} inputCommands  
  @returns {boolean}

- init()  
  실행에 필요한 함수이며, game함수의 결과를 확인해 추가 실행 여부를 결정한다.

- game()  
  문자열 입력 과정부터 변환 과정까지를 진행시키며, 종료 커맨드 (Q, Ctrl+C)가 input 될 때까지 반복하도록 한다.  
  @param {PlanCube} planeCube  
  @retruns {boolean}

planeCube.js

- constructor  
  초기 상태를 담는다.  
  @attr {Array\<Array\<string\>\>} this.current

- reset()  
  초기 상태로 되돌리며, 해당 상태를 출력한다.  
  @returns {Array\<Array\<string\>\>}

- getCurrent()  
  현재 상태를 출력할 수 있도록 string을 만들어 리턴한다.  
  @returns {string}

- operate()  
  큐브의 작동을 커맨드에 맞게 결정한다.  
  @param {string} command

util.js

- commands  
  enum처럼 활용하기 위한 커맨드 Object

- push()  
  방향을 확인해서 문자 어레이를 변경하는 함수  
  @param {string} direction  
  @param {Array<string>} line  
  @returns {Array<string>}

- reset()  
  큐브를 초기 상태로 되돌리기 위한 함수  
  @returns {Array\<Array\<string\>\>}

---

## 과제 설명

### 2단계: 평면 큐브 구현하기

3 X 3의 2차원 배열이 아래처럼 있다.

```
R R W
G C W
G B B
```

사용자 입력을 받아서 아래의 동작을 하는 프로그램을 구현하시오

```
> U  가장 윗줄을 왼쪽으로 한 칸 밀기 RRW -> RWR
> U' 가장 윗줄을 오른쪽으로 한 칸 밀기 RRW -> WRR
> R  가장 오른쪽 줄을 위로 한 칸 밀기 WWB -> WBW
> R' 가장 오른쪽 줄을 아래로 한 칸 밀기 WWB -> BWW
> L  가장 왼쪽 줄을 아래로 한 칸 밀기 RGG -> GRG (L의 경우 R과 방향이 반대임을 주의한다.)
> L' 가장 왼쪽 줄을 위로 한 칸 밀기 RGG -> GGR
> B  가장 아랫줄을 오른쪽으로 한 칸 밀기 GBB -> BGB (B의 경우도 U와 방향이 반대임을 주의한다.)
> B' 가장 아랫줄을 왼쪽으로 한 칸 밀기 GBB -> BBG
> Q  Bye~를 출력하고 프로그램을 종료한다.
```

### 요구사항

처음 시작하면 초기 상태를 출력한다.
간단한 프롬프트 (CLI에서 키보드 입력받기 전에 표시해주는 간단한 글자들 - 예: CUBE> )를 표시해 준다.
한 번에 여러 문자를 입력받은 경우 순서대로 처리해서 매 과정을 화면에 출력한다.

### 동작 예시

```
R R W
G C W
G B B

CUBE> UUR
U
R W R
G C W
G B B

U
W R R
G C W
G B B

R
W R W
G C B
G B R

CUBE> Q
Bye~
```

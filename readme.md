# 루빅스 큐브 구현

---

## 3단계 프로젝트 실행 및 사용

- 실행

```
npm start
```

- 사용

```
                    O O O
                    O O O
                    O O O

     Y Y Y     B B B     R R R     W W W
     Y Y Y     B B B     R R R     W W W
     Y Y Y     B B B     R R R     W W W

                    G G G
                    G G G
                    G G G

CUBE> F2F'F'
F

                    O O O
                    O O O
                    Y Y Y

     Y Y G     B B B     O R R     W W W
     Y Y G     B B B     O R R     W W W
     Y Y G     B B B     O R R     W W W

                    R R R
                    G G G
                    G G G

F

                    O O O
                    O O O
                    G G G

     Y Y R     B B B     Y R R     W W W
     Y Y R     B B B     Y R R     W W W
     Y Y R     B B B     Y R R     W W W

                    O O O
                    G G G
                    G G G

F'

                    O O O
                    O O O
                    Y Y Y

     Y Y G     B B B     O R R     W W W
     Y Y G     B B B     O R R     W W W
     Y Y G     B B B     O R R     W W W

                    R R R
                    G G G
                    G G G

F'

                    O O O
                    O O O
                    O O O

     Y Y Y     B B B     R R R     W W W
     Y Y Y     B B B     R R R     W W W
     Y Y Y     B B B     R R R     W W W

                    G G G
                    G G G
                    G G G

축하합니다! 큐브를 맞췄습니다!
경과시간: 00:30
조작갯수: 4
이용해주셔서 감사합니다. 뚜뚜뚜.
```

---

## 과제 구현 설명

### 설계

- 4개의 클래스를 사용하여 구현했다.
- RubiksCube : 큐브는 PlaneNode를 면의 개수만큼 가진다.
- PlaneNode : Plane과 PlaneEdge를 가진다.  
  PlaneEdge는 Node의 Plane과 맞물려있는 다른 Plane의 회전시 움직여야할 위치 정보를 담고있다.
- Plane : color 값을 가지는 큐브 면 그 자체
- PlaneEdge : 큐브의 전개도를 펼쳤을 때 Plane의 상하좌우로 연결되어야 하는 Plane의 열의 위치를 담고있다.

- 설계 의도는 다음과 같다.
  - Plane의 회전에 따라 함께 이동해줘야하는 데이터를 보다 편리하게 처리하게 하고 싶었다.
  - 전개도를 기준으로 하여, 회전에 따라 이동해줘야 하는 데이터에 대한 index 값을 알고 있는 PlaneEdge를 만들어주는 것으로 처리하고자 했다.
  - Plane과 PlaneEdge는 같은 hierachy로 처리되는 것이 타당하므로 PlaneNode라는 이름으로 묶어주고자 했다.
  - 그리고 RubiksCube는 PlaneNode를 면 데이터로서 갖고 있게 한다.

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

- isNumeric()  
  입력받은 문자가 숫자로 바뀔 수 있는 문자인지 검사한다.  
  @param {string} command  
  @returns {boolean}

- elapsedTime()  
  경과 시간을 산출한다.  
  @param {Date} startTime  
  @param {Date} endTime  
  @returns {string}

- init()  
  실행에 필요한 함수이며, game함수의 결과를 확인해 추가 실행 여부를 결정한다.

- game()  
  문자열 입력 과정부터 변환 과정까지를 진행시키며, 종료 커맨드 (Q, Ctrl+C)가 input 될 때까지 반복하도록 한다. 큐브를 초기화하는 .reset과 큐브를 랜덤하게 바꾸는 .shuffle 커맨드를 지원한다.  
  @param {RubiksCube} rubiksCube  
  @param {number} commandCount  
  @param {Date} startTime  
  @retruns {Object}

- run()  
  문자열 입력 과정부터 변환 과정까지를 진행시키며, 종료 커맨드 (Q, Ctrl+C)가 input 될 때까지 반복하도록 한다. 큐브를 초기화하는 .reset과 큐브를 랜덤하게 바꾸는 .shuffle 커맨드를 지원한다.  
  @param {RubiksCube} rubiksCube  
  @param {Array<string>} parsedCommands  
  @param {number} commandCount  
  @param {Date} startTime  
  @retruns {Object}

- isAllCorrect()  
   큐브를 검사하여 다 맞았는지의 여부를 확인한다.  
   @param {RubiksCube} rubiksCube  
   @retruns {boolean}
  planeCube.js

RubiksCube.js

- constructor  
  초기 상태를 담는다.  
  @attr {Object} this.cube

- init()
  큐브를 만든다.  
  @returns {Object}

- reset()  
  초기 상태로 되돌리며, 해당 상태를 리턴한다.  
  @returns {Object}

- shuffle()
  (추가 구현사항) 큐브를 섞고, 해당 상태를 리턴한다.  
  @returns {string}

- getCurrent()  
  현재 상태를 출력할 수 있도록 string을 만들어 리턴한다.  
  @returns {string}

- operate()  
  큐브의 작동을 커맨드에 맞게 결정한다.  
  @param {string} command  
  @returns {string}

- rotateForward()
  면 정보를 받아 정방향으로 큐브 면을 회전한다.  
  @param {string} side

- rotateBackward()
  면 정보를 받아 역방향으로 큐브 면을 회전한다.  
  @param {string} side

- rotatePlaneForward()
  plane 정보를 받아 정방향으로 Plane을 돌릴 수 있도록 Plane의 메소드를 호출한다.  
  @param {Plane} plane

- rotatePlaneForward()
  plane 정보를 받아 역방향으로 Plane을 돌릴 수 있도록 Plane의 메소드를 호출한다.  
  @param {Plane} plane

- rotateEdgesForward()
  Plane의 회전에 맞춰 edges 정보를 받아 정방향으로 Edge를 돌린다.  
  @param {PlaneEdge} edges

- rotateEdgesBackward()
  Plane의 회전에 맞춰 edges 정보를 받아 역방향으로 Edge를 돌린다.  
  @param {PlaneEdge} edges

PlaneNode.js

- constructor  
  초기 상태를 담는다.  
  @attr {Plane} this.plane  
  @attr {PlaneEdge} this.edges

- init()
  노드 데이터를 만들어 할당한다.  
  @param {string} planeSide  
  @param {Array} colors  
  @returns {PlaneNode}

Plane.js

- constructor  
  초기 상태를 담는다.  
  @attr {Array} this.data

- init()
  Plane 데이터를 만들어 할당한다.  
  @param {Array} colors  
  @returns {Plane}

- getData()
  인덱스를 받아 해당 인덱스의 데이터를 반환한다.  
  @param {Array} indexes  
  @returns {Array}

- setData()
  인덱스와 데이터를 받아 정해진 위치에 값을 저장한다.  
  @param {Array} indexes  
  @param {Array} newLine

- rotateForward()
  시계방향 기준 정방향으로 회전한다.

- rotateBackward()
  시계방향 기준 역방향으로 회전한다.

PlaneEdge.js

- constructor  
  초기 상태를 담는다.  
  @attr {Object} this.top  
  @attr {Object} this.right  
  @attr {Object} this.bottom  
  @attr {Object} this.left

- init()
  PlaneEdge 데이터를 만들어 할당한다.  
  @param {string} planeSide  
  @returns {PlaneEdge}

- isLinkedTo()
  위치를 의미하는 데이터 place를 받아 연결해줘야 할 데이터를 업데이트 하고 반환한다.
  @param {string} place  
  @returns {Object}

- isAt()
  정해진 인덱스 데이터를 할당한다.  
  @param {string} place  
  @returns {Array}

util.js

- PLANE_SIDE  
  enum처럼 활용하기 위한 면 정보 Object

---

## 과제 설명

### 2단계: 루빅스 큐브 구현하기

- 참고 링크를 참고해서 루빅스 큐브를 구현한다.
- 큐브는 W, B, G, Y, O, R의 6가지 색깔을 가지고 있다.
- 입력: 각 조작법을 한 줄로 입력받는다.
- 출력: 큐브의 6면을 펼친 상태로 출력한다.
- Q를 입력받으면 프로그램을 종료하고, 조작 받은 명령의 갯수를 출력시킨다.

### 큐브의 초기 상태

```
                B B B
                B B B
                B B B

 W W W     O O O     G G G     Y Y Y
 W W W     O O O     G G G     Y Y Y
 W W W     O O O     G G G     Y Y Y

                R R R
                R R R
                R R R
```

### 프로그램 예시

```
(초기 상태 출력)

CUBE> FRR'U2R

F
(큐브상태)

R
(큐브상태)

...

R
(큐브상태)

CUBE> Q
경과시간: 00:31 //추가 구현 항목
조작갯수: 6
이용해주셔서 감사합니다. 뚜뚜뚜.
```

### 추가 구현 기능

- 프로그램 종료 시 경과 시간 출력
- 큐브의 무작위 섞기 기능
- 모든 면을 맞추면 축하 메시지와 함께 프로그램을 자동 종료

### 3단계 코딩 요구사항

- 가능한 한 커밋을 자주 하고 구현의 의미가 명확하게 전달되도록 커밋 메시지를 작성할 것
- 함수나 메소드는 한 번에 한 가지 일을 하고 가능하면 20줄이 넘지 않도록 구현한다.
- 함수나 메소드의 들여쓰기를 가능하면 적게 (3단계까지만) 할 수 있도록 노력해 본다.

```
function main() {
      for() { // 들여쓰기 1단계
          if() { // 들여쓰기 2단계
              return; // 들여쓰기 3단계
          }
      }
  }
```

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

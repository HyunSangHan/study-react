#  Minesweeper(지뢰찾기)

## INSTALLATION
1. Repository를 clone합니다.
    ```
    $ git clone https://github.com/HyunSangHan/study-react.git
    ```

2. _지뢰찾기_ 가 있는 Directory로 이동합니다.
    ``` 
    $ cd study-react/ES6_minesweeper
    ```

3. Dependency들을 설치합니다.
    ```
    $ yarn
    ```
    또는
    ```
    $ npm install
    ```

## GETTING STARTED
1. Source를 Build 합니다.
    ```
    $ yarn build
    ```
    또는
    ```
    $ npm run build
    ```

2. 로컬환경에서 Server를 띄웁니다.
    ```
    $ yarn start
    ```
    또는
    ```
    $ npm start
    ```

3. 가로 칸 수, 세로 칸 수와 지뢰 개수를 입력하고 시작 버튼을 눌러 게임을 실행합니다.

## DESCRIPTIONS
### reset
`reset`이라는 버튼에 이벤트리스너를 달아, 사용자가 클릭할 시 `resetGame` 함수와 `resetValue`라는 함수를 실행시킵니다.

- `resetGame` : 게임 수행과 관련된 모든 상태를 초기화하는 함수

- `resetValue` : 상태 표시 영역의 가로, 세로, 지뢰개수를 default값인 10으로 복구시키고, 게임결과(`You Win!` 또는 `You Lose!`)를 지우는 함수

### play
`게임 시작`이라는 버튼에 이벤트리스너를 달아, 사용자가 클릭할 시 아래의 순서대로 게임 환경을 셋팅합니다.

1. 가로, 세로, 지뢰개수 유효성 검사
    - 소수를 입력한 경우 소수점 이하 강제 제거하여 input에 반영

    - 숫자가 아닌 값을 입력한 경우 alert을 띄우고 무효 처리

    - 음수를 입력한 경우 alert을 띄우고 무효 처리

    - 전체 칸 수(가로*세로)보다 지뢰개수가 많을 경우 alert을 띄우고 무효 처리

    - 전체 칸 수가 너무 많을 경우 alert을 띄우고 무효 처리

2. 게임 판을 동적으로 생성하고 지뢰 매설
    - 이중배열 형태의 가로*세로 크기를 가진 게임 판을 DOM에 생성

    - 각 칸마다 기본 속성(cell, close, x좌표값, y좌표값) 부여

    - 각 칸마다 이벤트리스너 달기
        * `click` : close 상태였던 해당(this) 칸을 open으로 변경해주는 콜백함수 실행

        * `contextmenu` : 기본 상태였던 해당(this) 칸에 깃발을 꽂아주는 콜백함수 실행

    - 랜덤으로 지뢰 매설
        * 전체 칸 수를 n이라 할 때, [0, n)의 구간에서 랜덤으로 숫자를 뽑음

        * 몫과 나머지값을 이용하여 뽑은 숫자를 좌표값으로 변환

        * 좌표값을 통해 이중배열의 요소에 접근하여 지뢰를 심기(`isMine = true`)

3. 지뢰찾기 진행
사용자가 각 close 상태의 칸을 클릭 시, 그에 맞는 결과를 보여줍니다.

    - 깃발을 꽂아둔 곳을 클릭한 경우 : 사용자가 지뢰 매설 칸으로 의심하고 있는 부분이므로 잘못된 클릭일 가능성을 감안, `confirm`을 띄움으로써 한번 더 주의를 줌

    - 지뢰가 아닌 칸을 클릭한 경우
        * 이웃한(거리가 1인) 여덟 칸 중에서 지뢰가 하나라도 있는 경우 : 클릭한(this) 칸만을 open하고 이웃 칸의 지뢰 개수를 보여줌

        * 이웃한(거리가 1인) 여덟 칸 중에서 지뢰가 하나도 없는 경우 : 클릭한(this) 칸 뿐만 아니라 주변 8칸도 클릭한 효과를 줌

            참고로, **재귀호출(Recursive Call)** 로 구현했고, 이에 대한 성능 향상을 위해 **메모이제이션(Memoization)** 을 적용했음

            아래는 handleClick이라는 함수의 일부임

            ```js
            if (mineCount > 0) {
            //주변 8칸 중에서 지뢰가 1개라도 있으면
            cell.textContent = mineCount; //그 셀에 주변 지뢰 개수를 적어준다
            } else {
            // 주변에 지뢰가 없으면 재귀로 주변을 터뜨린다
            neighborCells.forEach(neighborCell => {
                if (!neighborCell.classList.contains("open")) {
                // 메모이제이션 활용
                handleClick(neighborCell);
                } // 재귀호출
            });
            ```

    - 남은 지뢰 개수를 상태 표시 영역에서 안내해줌

### gameOver
지뢰찾기를 클리어했거나, 지뢰를 누른 경우 모든 지뢰를 보여주며 게임을 종료시킵니다.

- 게임이 종료되면 `isOver = true`로 두어 게임이 더 이상 진행되지 못하게 강제함
    * 지뢰를 클릭한 경우 : `"으악! 지뢰를 밟았다!"`라고 alert을 띄우고, 상태 표시 영역에 `"You Lose!"`를 출력

    * 남은 지뢰 개수와 남은 칸 수가 일치하게 된 경우 : `"승리하였습니다"`라고 alert을 띄우고, 상태 표시 영역에 `"You Win!"`를 출력
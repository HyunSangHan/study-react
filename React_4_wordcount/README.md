# TOEFL Writing 모의 테스트 환경
실제 토플 시험 준비생으로부터 아래와 같은 니즈를 접수받아, Writing 테스트를 실전처럼 모의로 진행해볼 수 있는 환경을 구현했습니다.
> "토플의 Writing시험은 실전에서 수기가 아닌 타이핑을 통해 진행되기 때문에, PC에서 연습해야한다. 그런데 PC에서조차 어떤 환경도 완벽하게 실전과 같은 경험을 기대하긴 어렵다. 단어수 카운트 서비스를 쓴다 해도, 타이머를 따로 써야하는 불편함이 있고, 자동으로 오탈자를 표시해주기 때문에 내가 실수한 것을 바로 알아채게 되어 실전보다 유리하게 된다."

## TOFEL Writing Test를 실전처럼 준비하기 위한 조건
- textarea에 입력한 글이 총 몇 어절인지 카운트한 결과가 실시간으로 확인되어야 함(제출 시 총 단어수가 제한되어 있음)
- 문제별 제한 시간이 다르며, 페이지상으로 잔여 시간이 실시간으로 확인되어야 함
- textarea에서 자동 오탈자 체크가 되면 안됨
- textarea가 활성화되어도 자동 테두리가 생기지 않아야 함

## Quick Start
실서비스는 http://counttoefl.dothome.co.kr/ 에서 살펴보실 수 있습니다.  

만약 로컬환경에서 실행하고자 하는 경우 터미널에 아래의 명령어를 입력하세요.

```
git clone https://github.com/HyunSangHan/study-react.git && cd study-react/React_4_wordcount && yarn && yarn start
```

이후, 문제와 제한시간을 입력하고 `START TEST` 버튼을 누르면 타이머가 시작됩니다.

## DESCRIPTION

### 어절 카운트

- 띄어쓰기와 줄바꿈을 기준으로 어절을 구분하여, 어절로 이루어진 배열을 만들고, 배열의 길이를 셉니다.

- 단, 별다른 단어 입력 없이 의미없는 공백을 입력하는 경우에는 0으로 카운트합니다.

  ```js
  counter = () => {
    const engAnswer = document.getElementById("content").value;
    let countNumNew = engAnswer.split(' ').length + engAnswer.split('\n').length;
    if (engAnswer === '') {
      countNumNew = 0;
    } else if (countNumNew > 0) countNumNew -= 1;
    this.setState({
      countNum: countNumNew
    });
    this.copyText(engAnswer);
  }
  ```

### 타이머
- `setInterval`을 이용하여 1000ms마다 잔여시간(초)을 1씩 깎습니다.
- 시간이 만료되었는지의 여부는 초단위로 판단하지만, view에서 보여줄 때에는 `mm:ss` 형태로 변환하여 보여줍니다.
- 시간이 만료되면 `clearInterval`과 함께 `isTimeout`이 `true`가 되면서 타이머가 `00:00`에서 멈추고, 폰트 색상이 빨갛게 변화합니다.

  ```js
  countDown() {
    this.setState(prevState => ({
      time: prevState.time,
    }));
    this.timer = setInterval(() => this.setState(prevState => ({
      ...prevState,
      gapSecondTotal: prevState.gapSecondTotal - 1
    })), 1000);
    this.ifTimer = setInterval(() => {
      const { gapSecondTotal } = this.state;
      if (gapSecondTotal <= 0) {
        clearInterval(this.timer, this.ifTimer);
        this.setState({
          isTimeout: true
        });
      }
    }, 1000);
  ​}
  ```

### 오탈자 체크 방지 및 활성화 시 테두리 표시 방지
- textarea 태그의 속성으로 `spellCheck="false"`를 추가하여 자동 오탈자 체크를 off했습니다.(디폴트는 `spellCheck="true"`임)
- textarea 태그에서 `border: none; box-shadow: none;` 등의 스타일을 줘서 테두리가 나타나지 않도록 했습니다.
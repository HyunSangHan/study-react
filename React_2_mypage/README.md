# 자기소개 웹사이트: this.state

React의 (Class형) Component에서는 state 객체를 통해 상태 관리를 하며, 필요 시 각 데이터를 불러오기 위해 `this.state`의 형태로 접근하게 됩니다. 이러한 컨셉에 착안하여 `H`yun`S`ang에 대한 데이터를 담은 웹사이트라는 의미로, 사이트의 이름을 **t`h`i`s`.state**이라고 지었습니다. 예컨대 저의 timeline을 알고 싶다면 마치 이를 key로 `this.state.timeline`처럼 쉽게 접근 가능하도록, 이 사이트가 `this.state`의 역할을 해주겠다는 의미입니다.

## QUICK START

최종 결과물은 http://phenomenon.kr/ 에서 확인할 수 있습니다.(권장)

로컬 환경에서 확인하고자 하는 경우, 터미널에 아래의 명령어를 입력하시면 빠릅니다.

```
git clone https://github.com/HyunSangHan/study-react.git && cd study-react/React_2_mypage/client && yarn && yarn start
```

그러나 이 경우 Gallery의 구글맵과 관련한 에러가 발생하게 됩니다. 보안상의 이유로, API KEY가 github 저장소에 push되지 않도록 gitignore 설정을 해두었기 때문입니다. 완전한 작동을 원한다면 우선 `ctrl + C`를 통해 서버를 종료시킨 후 아래의 가이드대로 추가 진행하시기 바랍니다.

1. GOOGLE MAP API 사용 신청을 해서 API KEY를 발급 받으세요.(이 과정에서 시간이 꽤 소요될 것입니다.)

2. 현재 디렉토리(client)에서 `.env`라는 파일을 만들어 API KEY를 환경변수로 등록하세요. 작성방식은 아래와 같습니다.

   ```
   REACT_APP_GOOGLE_MAP_API_KEY = 'API KEY가 들어갈 곳. 참고로 따옴표 내부만 지우고 KEY를 붙여넣어야 함.'
   ```

3. `yarn start`로 다시 서버를 구동합니다.

## OVERVIEW

### 사용 라이브러리/API

- 프로젝트 생성 : create-react-app
- 코드 스타일링 : prettier, husky, lint-staged
- 그리드 시스템 : reactstrap
  - 그리드 시스템을 위해서만 부분적으로 활용했고, 그 외 대부분의 UI는 reactstrap의 활용 없이 직접 구현했음
  - 반응형(Responsive)웹으로 구현했음
- 라우터 : react-router
- 지도 서비스 연동 : axios, Google Maps API

## DESCRIPTIONS

`Main.js`에서 대부분의 컴포넌트가 조합됩니다. 본문을 구성하는 각 컴포넌트들은 배경색을 흰색(홀수 번째 컴포넌트) - 옅은 회색(짝수 번째 컴포넌트)으로 번갈아 가며 서로와의 경계를 형성하게 됩니다. 사이트의 내용을 구성할 데이터들은 모두 [/client/src/content.js](https://github.com/HyunSangHan/study-react/blob/master/React_2_mypage/client/src/content.js)에서 모듈화하여 관리하며, 여기에 저장된 데이터가 추가/삭제/변경되어도 그에 맞게 UI는 자동으로 대응되므로 데이터 업데이트 시 추가적인 코딩은 필요하지 않습니다.

### Header

Global Navigation Bar로서, 각 주제별 컴포넌트에 접근할 수 있도록 하는 메뉴를 제공하는 역할

- UX/UI
  - 데스크탑 버전 : 접근 가능한 메뉴들이 모두 펼쳐져 있음
  - 모바일 버전 : 삼선 메뉴가 나타나며 이 삼선 메뉴를 통해 1depth 더 들어가서 접근 가능한 메뉴들을 확인 가능
- 각 메뉴클릭 시, 앵커링 형태로 본문의 각 컴포넌트에 접근 가능
- 본문의 각 컴포넌트에 접근하게 되면 해당 메뉴의 폰트 색상이 변하고 밑줄이 추가됨
- 스크롤을 어느 수준 이상 내리면, 헤더가 브라우저 상단에 고정됨(`transition`을 줘서 부드럽게 변화)

### Gate(Main.js 내에 있음)

웹사이트의 첫 이미지를 제공하는 역할

- 따로 파일을 분리하진 않았음
- `position: fixed`를 적용하고 `z-index`를 낮게 적용해, 스크롤을 내리면 본문에 덮이도록 구현
- `window.innerWidth`에 따라 적합한 사이즈의 이미지가 렌더링됨
- 하단에 있는, 아랫방향 화살표를 누르면 스크롤이 자동 이동함

### About

이름, 사진, 간단한 자기소개, 그리고 외부 서비스(Github, LinkedIn, Facebook, Instagram)에 접근할 수 있는 링크를 제공하는 역할

- 디바이스 너비에 따라 적절하게 요소들이 배열됨

### Gallery

본인의 과거 사진을 둘러볼 수 있게 제공해주는 역할

- 데스크탑 버전에서는 1 by 6, 모바일 버전에서는 3 by 3 형태로 미리보기 썸네일 제공
- 각 썸네일 또는 `See more >`를 클릭하면 갤러리 상세페이지로 이동함

#### Gallery Detail

- 좌측은 사진(what), 우측은 사진이 찍힌 장소를 지도에 표시한 것(where)을 보여줌
- 상단의 썸네일을 통해 다른 사진들을 볼 수 있으며, 모바일 버전에서는 스와이프가 가능함
- 썸네일을 클릭하여 다른 사진으로 리렌더링하는 경우, 좌표값과 확대정도는 변화하지만 정작 엘리먼트의 변화는 감지되지 않아 구글맵이 리렌더링이 되지 않는 이슈가 있었음. 이는 엘리먼트의 key값을 각자 다르게 만들어 diff check 로직에 걸리도록 fix함

### Timeline

본인의 이력을 요약하여 보여주는 공간. 학력/경력이 시간의 역순으로 기재되어 있음.

- UX/UI
  - 데스크탑 버전 : 시기(동그라미 부분)는 가운데 정렬되어 있지만 각 이력이 UI상 좌우 번갈아 등장함
  - 모바일 버전 : 시기(동그라미 부분)가 좌측에, 이력이 우측에 일관되게 등장함
- data로 쓰이는 객체 내부의 구조(뎁스)에 따라, 폰트 크기 및 색상 등 css가 적절하게 반영됨

### Skill Set

- 주요 스킬셋을 로고 형태로 보여주는 공간
- 가로/세로의 비율과 여백이 각기 다른 로고 이미지를 데스크탑 버전에서는 가로, 모바일 버전에서는 세로로 재배치하며 정렬을 최적화함

### Products

- 주요 토이 프로젝트들을 보여주는 공간
- 깃헙 레포지토리 혹은 데모 페이지로의 링크 제공

### Contributions

- 오픈소스 Pull Request 경험에 대해 보여주는 공간
- Pull Request 상태에 따라 아래와 같이 구분하여 label을 붙여둠
  - Open / Closed : PR이 열려있는지 여부 (필수)
  - Approved / Merged : 메인테이너로부터 Approve를 받았는지, 최종 Merge까지 되었는지 등 진행 상황 (선택)
  - Released : 릴리즈 되었는지 여부 (선택)

### Contact

- 메일로 컨택을 할 수 있는 공간

### Blog

- Today I Learned 공부한 내용을 적는 블로그 [TILLOG](https://tillog.netlify.com/)로 연결됨
- Header 영역에만 존재함

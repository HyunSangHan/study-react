# 성남시 맛집 랭킹 서비스

Visit Korea의 Open API를 활용해 만든 성남시 맛집 랭킹 서비스입니다. 랭킹순으로 20위까지의 맛집이 리스팅되며, 페이지당 10개씩 페이지네이션으로 구현되어있습니다.

## QUICK START

터미널에 아래의 명령어를 입력하세요.

```
git clone https://github.com/HyunSangHan/study-react.git && cd study-react/React_1_calculator && yarn && yarn start
```

## UI

<img src = 'https://user-images.githubusercontent.com/44132406/73052870-8c373b80-3ec9-11ea-96eb-e8e4f806fdb7.png'>

## DESCRIPTIONS

Visit Korea의 TourAPI를 사용하여 아래와 같이 Request 후 Response를 받습니다.

#### Request
```js
axios.get('http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList',
  {
    params : {
      ServiceKey: decodeURIComponent(process.env.REACT_APP_KEY),
      pageNo: page,
      numOfRows: 10,
      MobileApp: 'study for axios',
      MobileOS: 'ETC',
      arrange: 'P',
      cat1 : 'A05',
      contentTypeID: 39,
      areaCode: 31,
      sigunguCode: 12,
      cat2 : 'A0502',
      cat3 : 'A05020100',
      listYN: 'Y',
      _type: 'json'
      rlangtype: 'KOR'
    }
  }
)
```

#### Response
```js
body: {
  items: {
    item: [
      {
        0: {
          addr1: "경기도 성남시 분당구 불정로 6",
          areacode: 31,
          cat1: "A05",
          cat2: "A0502",
          cat3: "A05020100",
          ...
          },
        ...
      }
    ]
  },
  numOfRows: 10,
  pageNo: 1,
  totalCount: 21
}
```
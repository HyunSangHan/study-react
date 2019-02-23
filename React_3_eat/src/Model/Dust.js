// export default class api1 {
//     resultCode
//     resultMsg
//     numOfRows
//     pageNo
//     totalCount
//     items
//     stationName
//     mangName
//     dataTime
//     so2Value
//     coValue
//     o3Value
//     no2Value
//     pm10Value
//     pm10Value24
//     pm25Value
//     pm25Value24
//     khai
//     khaiGrade
//     so2Grade
//     coGrade
//     o3Grade
//     no2Grade
//     pm10Grade
//     pm25Grade
//     pm10Grade1H
//     pm25Grade1H
//
//
//     constructor(data: any) {
//         this.audiAcc = data.audiAcc||"";
//         this.audiChange = data.audiChange||"";
//         this.audiCnt = data.audiCnt||"";
//         this.audiInten = data.audiInten||"";
//         this.movieCd = data.movieCd||"";
//         this.movieNm = this.cha(data.movieNm);
//         this.openDt = data.openDt||"";
//         this.rank = data.rank||"";
//         this.rankInten = data.rankInten||"";
//         this.rankOldAndNew = data.rankOldAndNew||"";
//         this.rnum = data.rnum||"";
//         this.salesAcc = data.salesAcc||"";
//         this.salesAmt = data.salesAmt||"";
//         this.salesChange = data.salesChange||"";
//         this.salesInten = data.salesInten||"";
//         this.salesShare = data.salesShare||"";
//         this.scrnCnt = data.scrnCnt||"";
//         this.showCnt = data.showCnt||"";
//     }
//
//     cha(movieNm: string) {
//         if (movieNm === "극한직업") {
//             return "극한현상";
//         }
//         return movieNm;
//     }
//
//     isNull(): boolean {
//         return this.rank === "" && this.movieNm === "";
//     }
// }
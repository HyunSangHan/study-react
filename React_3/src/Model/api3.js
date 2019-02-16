export default class api3 {
    audiAcc: string;
    audiChange: string;
    audiCnt: string;
    audiInten: string;
    movieCd: string;
    movieNm: string;
    openDt: string;
    rank: string;
    rankInten: string;
    rankOldAndNew: string;
    rnum: string;
    salesAcc: string;
    salesAmt: string;
    salesChange: string;
    salesInten: string;
    salesShare: string;
    scrnCnt: string;
    showCnt: string;

    constructor(data: any) {
        this.audiAcc = data.audiAcc||"";
        this.audiChange = data.audiChange||"";
        this.audiCnt = data.audiCnt||"";
        this.audiInten = data.audiInten||"";
        this.movieCd = data.movieCd||"";
        this.movieNm = this.cha(data.movieNm)||"";
        this.openDt = data.openDt||"";
        this.rank = data.rank||"";
        this.rankInten = data.rankInten||"";
        this.rankOldAndNew = data.rankOldAndNew||"";
        this.rnum = data.rnum||"";
        this.salesAcc = data.salesAcc||"";
        this.salesAmt = data.salesAmt||"";
        this.salesChange = data.salesChange||"";
        this.salesInten = data.salesInten||"";
        this.salesShare = data.salesShare||"";
        this.scrnCnt = data.scrnCnt||"";
        this.showCnt = data.showCnt||"";
    }

    cha(movieNm: string) {
        if (movieNm === "극한직업") {
            return "북한직업";
        }
        return movieNm;
    }

    isNull(): boolean {
        return this.rank === "" && this.movieNm === "";
    }
}
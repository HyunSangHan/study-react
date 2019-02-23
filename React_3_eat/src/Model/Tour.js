export default class Tour {
    numOfRows: number;
    pageNo: number;
    totalCount: number;
    addr1: string;
    addr2: string;
    areacode: number;
    booktour: number;
    cat1: string;
    cat2: string;
    cat3: string;
    contentid: number;
    contenttypeid: number;
    createdtime: string; //?
    firstimage: string;
    firstimage2: string;
    mapx: number;
    mapy: number;
    mlevel: number;
    readcount: number;
    sigungucode: number;
    tel: string;
    title: string;
    zipcode: string;

    constructor(data: any) {
        this.numOfRows = data.numOfRows||"";
        this.pageNo = data.pageNo||"";
        this.totalCount = data.totalCount||"";
        this.addr1 = data.addr1||"";
        this.addr2 = data.addr2||"";
        this.areacode = data.areacode||"";
        this.booktour = data.booktour||"";
        this.cat1 = data.cat1||"";
        this.cat2 = data.cat2||"";
        this.cat3 = data.cat3||"";
        this.contentid = data.contentid||"";
        this.contenttypeid = data.contenttypeid||"";
        this.createdtime = data.createdtime||"";
        this.firstimage = data.firstimage||"";
        this.firstimage2 = data.firstimage2||"";
        this.mapx = data.mapx||"";
        this.mapy = data.mapy||"";
        this.mlevel = data.mlevel||"";
        this.readcount = data.readcount||"";
        this.sigungucode = data.sigungucode||"";
        this.tel = data.tel||"";
        this.title = data.title||"";
        this.zipcode = data.zipcode||"";
    }

    isNull(): boolean {
        return this.title === "" && this.firstimage2 === "";
    }
}
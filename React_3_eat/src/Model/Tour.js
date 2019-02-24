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
        this.numOfRows = data.numOfRows||0;
        this.pageNo = data.pageNo||0;
        this.totalCount = data.totalCount||0;
        this.addr1 = data.addr1||"";
        this.addr2 = data.addr2||"";
        this.areacode = data.areacode||0;
        this.booktour = data.booktour||0;
        this.cat1 = data.cat1||"";
        this.cat2 = data.cat2||"";
        this.cat3 = data.cat3||"";
        this.contentid = data.contentid||0;
        this.contenttypeid = data.contenttypeid||0;
        this.createdtime = data.createdtime||"";
        this.firstimage = data.firstimage||"";
        this.firstimage2 = data.firstimage2||"";
        this.mapx = data.mapx||0;
        this.mapy = data.mapy||0;
        this.mlevel = data.mlevel||0;
        this.readcount = data.readcount||0;
        this.sigungucode = data.sigungucode||0;
        this.tel = data.tel||"";
        this.title = data.title||"";
        this.zipcode = data.zipcode||"";
    }

    isNull(): boolean {
        return this.title === "" && this.firstimage === "";
    }
}
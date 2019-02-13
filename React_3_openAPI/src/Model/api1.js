// import App from "../App";

export default class api1 {
    addr1: string;
    addr2: string;
    areacode: number;
    cat1: string;
    cat2: string;
    cat3: string;
    contentid: number;
    contenttypeid: number;
    createdtime: number;
    firstimage: string;
    firstimage2: string;
    mapx: number;ㅞ
    mapy: number;
    mlevel: number;
    modifiedtime: number;
    readcount: number;
    sigungucode: number;
    tel: string;
    title: string;
    zipcode: string;
    fullAddr : string;


    constructor (data: any) {
        this.addr1 = data.addr1 ||'';
        this.addr2 = this.transAddr2(data.addr2) ||'';
        this.areacode = data.areacode || 0;
        this.cat1 = data.cat1 ||'';
        this.cat2 = data.cat2 ||'';
        this.cat3 = data.cat3 ||'';
        this.contentid = data.contentid || 0;
        this.contenttypeid = data.contenttypeid || 0;
        this.createdtime = data.createdtime || 0;
        this.firstimage = data.firstimage ||'';
        this.firstimage2 = data.firstimage2 ||'';
        this.mapx = data.mapx ||0;
        this.mapy = data.mapy ||0;
        this.mlevel = data.mlevel ||0;
        this.modifiedtime = data.modifiedtime ||0;
        this.readcount = data.readcount ||0;
        this.sigungucode = data.sigungucode ||0;
        this.tel = data.tel ||'';
        this.title = data.title ||'';
        this.zipcode = data.zipcode ||'';
    }

    transFull(_addr1: string, _addr2: string){
        this.fullAddr = _addr1.concat(_addr2);
        return this.fullAddr;
    }
    transAddr2(_addr2: string){
        if(_addr2 =='(신림동)'){
            return '(대학동)';
        }
        return _addr2;
    }

    update (data: any){
        if(data.addr1 !==undefined && data.addr1 !==null) this.addr1 = data.addr1;
        if(data.addr2 !==undefined && data.addr2 !==null) this.addr2 = data.addr2;
        if(data.areacode !==undefined && data.areacode !==null) this.areacode = data.areacode;
        if(data.cat1 !==undefined && data.cat1 !==null) this.cat1 = data.cat1;
        if(data.cat2 !==undefined && data.cat2 !==null) this.addr = data.cat2;
        if(data.cat3 !==undefined && data.cat3 !==null) this.cat3 = data.cat3;
        if(data.title !==undefined && data.title !==null) this.title = data.title;
        if(data.zipcode !==undefined && data.zipcode !==null) this.zipcode = data.zipcode;
        // if(data.tm !==undefined && data.tm !==null) this.tm = data.tm;if(data.stationName !==undefined && data.stationName !==null) this.stationName = data.stationName;
        // if(data.addr !==undefined && data.addr !==null) this.addr = data.addr;
        // if(data.tm !==undefined && data.tm !==null) this.tm = data.tm;
        // if(data.stationName !==undefined && data.stationName !==null) this.stationName = data.stationName;
        // if(data.addr !==undefined && data.addr !==null) this.addr = data.addr;
        // if(data.tm !==undefined && data.tm !==null) this.tm = data.tm;
        // if(data.stationName !==undefined && data.stationName !==null) this.stationName = data.stationName;
        // if(data.addr !==undefined && data.addr !==null) this.addr = data.addr;
        // if(data.tm !==undefined && data.tm !==null) this.tm = data.tm;
        // if(data.stationName !==undefined && data.stationName !==null) this.stationName = data.stationName;
        // if(data.addr !==undefined && data.addr !==null) this.addr = data.addr;
        // if(data.tm !==undefined && data.tm !==null) this.tm = data.tm;
        // if(data.stationName !==undefined && data.stationName !==null) this.stationName = data.stationName;
        // if(data.addr !==undefined && data.addr !==null) this.addr = data.addr;
        // if(data.tm !==undefined && data.tm !==null) this.tm = data.tm;
        //

    }

    isNull (): boolean {
        return (this.title === '' || this.zipcode === '')
    }

}

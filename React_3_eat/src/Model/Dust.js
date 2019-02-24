export default class Dust {
    resultCode: string;
    resultMsg: string;
    numOfRows: number;
    pageNo: number;
    totalCount: number;
    stationName: string;
    mangName: string;
    dataTime: string;
    so2Value: number;
    coValue: number;
    o3Value: number;
    no2Value: number;
    pm10Value: number;
    pm10Value24: number;
    pm25Value: number;
    pm25Value24: number;
    khai: number;
    khaiGrade: number;
    so2Grade: number;
    coGrade: number;
    o3Grade: number;
    no2Grade: number;
    pm10Grade: number;
    pm25Grade: number;
    pm10Grade1H: number;
    pm25Grade1H: number;


    constructor(data: any) {
        this.resultCode = data.resultCode||"";
        this.resultMsg = data.resultMsg||"";
        this.numOfRows = data.numOfRows||0;
        this.pageNo = data.pageNo||0;
        this.totalCount = data.totalCount||0;
        this.stationName = data.stationName||"";
        this.mangName = data.mangName||"";
        this.dataTime = data.dataTime||"";
        this.so2Value = data.so2Value||0;
        this.coValue = data.coValue||0;
        this.o3Value = data.o3Value||0;
        this.no2Value = data.no2Value||0;
        this.pm10Value = data.pm10Value||0;
        this.pm10Value24 = data.pm10Value24||0;
        this.pm25Value = data.pm25Value||0;
        this.pm25Value24 = data.pm25Value24||0;
        this.khai = data.khai||0;
        this.khaiGrade = data.khaiGrade||0;
        this.so2Grade = data.so2Grade||0;
        this.coGrade = data.coGrade||0;
        this.o3Grade = data.o3Grade||0;
        this.no2Grade = data.no2Grade||0;
        this.pm10Grade = data.pm10Grade||0;
        this.pm25Grade = data.pm25Grade||0;
        this.pm10Grade1H = data.pm10Grade1H||0;
        this.pm25Grade1H = data.pm25Grade1H||0;
    }
}
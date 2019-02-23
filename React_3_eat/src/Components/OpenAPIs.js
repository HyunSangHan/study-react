import React, { Component } from 'react';
import './../App.css';
import axios from 'axios';
// import Dust from './../Model/Dust';
import Tour from './../Model/Tour';
// import {Grid, Col, Row} from 'reactstrap';

class OpenAPIs extends Component {

    constructor(props){
        super(props);

        this.state = {
            dust : '',
            tour : {
            },
            loading_dust : false,
            loading_tour : false,
            loading_movie : false,
            tmp : ''
        }

     //   this.getDust();
     //   this.movie();
    }

     getTour = (page) => () => {
         let self = this;
         axios.get('http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList',
             {
                 params : {
                     ServiceKey: decodeURIComponent('mNVy9aaH3reQ1JFjxQOrlFw5y%2FMhhpBvfqBXY0%2BBCIV12bD6w65no4SFckivi7JOCkMCrRX5%2BwPTytRh0EbKmg%3D%3D'),
                     pageNo: page,
                     numOfRows: 10,
                     MobileApp: 'study for axios and redux',
                     MobileOS: 'ETC',
                     arrange: 'P',
                     cat1 : 'A05',
                     contentTypeID: 39,
                     areaCode: 1,
                     sigunguCode: 15,
                     cat2 : 'A0502',
                     cat3 : 'A05020100',
                     listYN: 'Y',
                     _type: 'json'
//                     rlangtype: 'KOR'
                 }
             })
             .then(function(response){
                 let tourList: Tour[] = [];
                 for(let i=0; i<10; i++) {
                     let tourEach = new Tour(response.data.response.body.items.item[i]); //[i]
                     tourList.push(tourEach);
                     console.log(response.data.response.body.items.item[i]);
                 }
                 self.props.onTour(tourList);
                 self.setState({
                     // tmp: response.data.response.body.items.item[0].firstimage

                         // ans3: _tmp,
                     loading_tour: true,
                     }
                 );
             })
     }

    // fineDust = () => () => {
    //     axios.get('http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
    //         {
    //             params: {
    //                 sidoName: "서울",
    //                 ver: "1.0",
    //                 ServiceKey: decodeURIComponent('mNVy9aaH3reQ1JFjxQOrlFw5y%2FMhhpBvfqBXY0%2BBCIV12bD6w65no4SFckivi7JOCkMCrRX5%2BwPTytRh0EbKmg%3D%3D'),
    //                 _returnType: "json"
    //             }
    //         })
    //         .then( function (response) {
    //             console.log(response);
    //         })
    //
    // }

    //


    render() {
        return (
            <div className="App">
                <div className="pointer">
                    여기를 클릭하면 미세먼지 정보가 나온다
                </div>
                <div className="answer">
                    (미세먼지 정보가 나올 공간)
                </div>

                <div className="pointer" onClick={this.getTour(1)}>
                    여기를 클릭하면 음식점 정보가 나온다
                </div>
                <div>
                    {this.state.loading_tour ? (
                        <div className="answer">
                            음식점 정보야 나와랏 =>
                            <div>
                                {this.props.tourList.map(
                                    (tourEach) => (
                                        <div>
                                            <div>{tourEach.title}</div>
                                            <div>{tourEach.addr1}</div>
                                            <div><img src = {tourEach.firstimage2} /> </div>
                                            <div>{tourEach.tel}</div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    ) : (
                        <div>투어 로딩중</div>
                    )}
                </div>

                {/*<div className="pointer" onClick={this.movie()}>*/}
                    {/*여기를 클릭하면 영화 박스오피스 정보가 나온다*/}
                {/*</div>*/}
                {/*<div>*/}
                    {/*{this.state.loading_movie ? (*/}
                        {/*<div className="answer">*/}
                            {/*오늘 박스오피스 1등은?*/}
                            {/*<div>*/}
                                {/*{this.props.movieList.map(*/}
                                    {/*(movieItem) => (*/}
                                        {/*<div>*/}
                                            {/*<div>{movieItem.rank}</div>*/}
                                            {/*<div>{movieItem.movieNm}</div>*/}
                                            {/*<div>{movieItem.audiCnt}</div>*/}
                                            {/*<div>{movieItem.openDt}</div>*/}
                                            {/*<div>{movieItem.scrnCnt}</div>*/}
                                        {/*</div>*/}
                                    {/*)*/}
                                {/*)}*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*) : (*/}
                        {/*<div>영화 로딩중</div>*/}
                    {/*)}*/}
                {/*</div>*/}

            </div>

        );
    }
}

export default OpenAPIs;


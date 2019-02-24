import React, { Component } from 'react';
import './../App.css';
import axios from 'axios';
import Dust from './../Model/Dust';
import Tour from './../Model/Tour';
import {Container, Col, Row, Pagination, PaginationItem, PaginationLink} from 'reactstrap';

class OpenAPIs extends Component {

    constructor(props){
        super(props);

        this.state = {
            dust : '',
            tour : {
            },
            loading_dust : false,
            loading_tour : false,
            // loading_movie : false,
            // tmp : ''
        }

//       this.getDust();
      this.getTour(1);
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
                     areaCode: 31,
                     sigunguCode: 12,
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

    getDust = () => () => {
        let self = this;
        axios.get('http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
            {
                params: {
                    sidoName: "경기",
                    ver: "1.0",
                    ServiceKey: decodeURIComponent('mNVy9aaH3reQ1JFjxQOrlFw5y%2FMhhpBvfqBXY0%2BBCIV12bD6w65no4SFckivi7JOCkMCrRX5%2BwPTytRh0EbKmg%3D%3D'),
                   _returnType: "json"
                }

            })
            .then( function (response) {
                let dustList: Dust[] = [];


                console.log(response);
            })

    }




    render() {
        return (
            <div className="App">

                {/*<div className="pointer" onClick={this.getDust()}>*/}
                    {/*여기를 클릭하면 미세먼지 정보가 나온다*/}
                {/*</div>*/}
                {/*<div className="answer">*/}
                    {/*(미세먼지 정보가 나올 공간)*/}
                {/*</div>*/}
                <div className="big-title pointer" onClick={this.getTour(1)}>
                    성남시 한식 맛집 리스트
                </div>
                <Container>
                    <div>
                        {this.state.loading_tour ? (
                            <div>
                                <div className={"page"}>
                                    <Pagination>
                                        {/*<PaginationItem>*/}
                                        {/*<PaginationLink previous href="#" />*/}
                                        {/*</PaginationItem>*/}
                                        <PaginationItem>
                                            <PaginationLink onClick={this.getTour(1)}>
                                                TOP 1- 10
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink onClick={this.getTour(2)}>
                                                TOP 11 - 20
                                            </PaginationLink>
                                        </PaginationItem>
                                        {/*<PaginationItem>*/}
                                        {/*<PaginationLink next href="#" />*/}
                                        {/*</PaginationItem>*/}
                                    </Pagination>
                                </div>
                                <div className={"table"}>
                                    {this.props.tourList.map(
                                        (tourEach) => (
                                            <Row className={"min"}>
                                                <Col xs="12" sm="3">
                                                    <img src = {tourEach.firstimage} alt={"thumbnail"}/>
                                                </Col>
                                                <Col xs="12" sm="4">
                                                    <div className={"title"}>
                                                        <b>{tourEach.title}</b>
                                                    </div>
                                                </Col>
                                                <Col xs="12" sm="5">
                                                    <div className={"rest"}>
                                                        <div className={"left"}>
                                                            <li>{tourEach.tel}</li>
                                                            {/*<br/>*/}
                                                            <li>{tourEach.addr1}</li>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                        )
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div>▲ 눌러야함</div>
                        )}
                    </div>

                </Container>
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


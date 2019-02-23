import React, { Component } from 'react';
import './../App.css';
import axios from 'axios';
// import api1 from './../Model/api1';
import api3 from './../Model/api3';
import Circle from "./CounterList";
// import {Grid, Col, Row} from 'reactstrap';

class OpenAPIs extends Component {

    constructor(props){
        super(props);

        this.state = {
            // ans1 : '',
            // ans2 : '',
            ans3 : '',
            loading : false,
        }

        this.getMovieList(0);
    }

     getMovieList (pageNo){
         let _tmp;
         let self = this;
         axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
             {
                 params : {
                     key: '33db767e8a6a752e4accc49239ac668e',
                     targetDt: '20190221',
                 }
             })
             .then(function(response){
                 let movieList: api3[] = [];
                 for(let i=0; i<10; i++) {
                     let movieEach = new api3(response.data.boxOfficeResult.dailyBoxOfficeList[i]);
                     movieList.push(movieEach);
                 }

                 self.props.onMovie(movieList);
                 _tmp = self.props.movieList[0].movieNm;
                 console.log(_tmp)
                 self.setState({
                         ans3: _tmp,
                         loading: true,
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



    // mNVy9aaH3reQ1JFjxQOrlFw5y%2FMhhpBvfqBXY0%2BBCIV12bD6w65no4SFckivi7JOCkMCrRX5%2BwPTytRh0EbKmg%3D%3D

    movie = () => () => {
        let _tmp;
        let self = this;
        axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
            {
                params : {
                    key: '33db767e8a6a752e4accc49239ac668e',
                    targetDt: '20190221'
                }
            })
            .then(function(response){
                let movieList: api3[] = [];
                for(let i=0; i<10; i++) {
                    let movieEach = new api3(response.data.boxOfficeResult.dailyBoxOfficeList[i]);
                    movieList.push(movieEach);
                }

                self.props.onMovie(movieList);
                _tmp = self.props.movieList[0].movieNm;
                console.log(_tmp)
                self.setState({
                        ans3: _tmp
                    }
                );
            })
    }

    render() {
        return (
            <div className="App">
                <div className="pointer">
                    여기를 클릭하면 미세먼지 정보가 나온다
                </div>
                <div className="answer">
                    (미세먼지 정보가 나올 공간)
                </div>

                <div className="pointer">
                    여기를 클릭하면 도로명주소 정보가 나온다
                </div>
                <div className="answer">
                    (도로명주소 정보가 나올 공간)
                </div>

                <div className="pointer" onClick={this.movie()}>
                    여기를 클릭하면 영화 박스오피스 정보가 나온다
                </div>
                <div>
                    {this.state.loading ? (
                        <div className="answer">
                            오늘 박스오피스 1등은?
                            <div>
                                {this.props.movieList.map(
                                    (movieItem) => (
                                        <div>
                                            <div>{movieItem.rank}</div>
                                            <div>{movieItem.movieNm}</div>
                                            <div>{movieItem.audiCnt}</div>
                                            <div>{movieItem.openDt}</div>
                                            <div>{movieItem.scrnCnt}</div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    ) : (
                        <div>로딩중</div>
                    )}
                </div>



            </div>

        );
    }
}

export default OpenAPIs;


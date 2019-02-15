import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import api1 from './Model/api1';
import api3 from './Model/api3';
// import {Grid, Col, Row} from 'reactstrap';

class App extends Component {

    constructor(){
        super();

        this.state = {
            // ans1 : '',
            // ans2 : '',
            ans3 : ''
        }
    }

    fineDust = () => () => {
        axios.get('http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
            {
                params: {
                    sidoName: "서울",
                    ver: "1.0",
                    ServiceKey: decodeURIComponent('mNVy9aaH3reQ1JFjxQOrlFw5y%2FMhhpBvfqBXY0%2BBCIV12bD6w65no4SFckivi7JOCkMCrRX5%2BwPTytRh0EbKmg%3D%3D'),
                    _returnType: "json"
                }
        })
        .then( function (response) {
            console.log(response);
        })

    }




    // mNVy9aaH3reQ1JFjxQOrlFw5y%2FMhhpBvfqBXY0%2BBCIV12bD6w65no4SFckivi7JOCkMCrRX5%2BwPTytRh0EbKmg%3D%3D

    movie = () => () => {
        let _tmp;
        let c = this;
        axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
            {
            params : {
                key: '33db767e8a6a752e4accc49239ac668e',
                targetDt: '20190213'
                }
            })
            .then(function(response){
                let movieList: api3[] = [];
                for(let i=0; i<10; i++) {
                    let movieEach = response.data.boxOfficeResult.dailyBoxOfficeList[i];
                    movieList.push(movieEach);
                }
                _tmp = movieList[0].movieNm;
                    console.log(_tmp)
                    c.setState({
                            ans3: _tmp
                        }
                    );
                })
    }

    render() {
        return (
            <div className="App">
                <div className="pointer" onClick={this.fineDust()}>
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
                <div className="answer">
                    오늘 박스오피스 1등은? {this.state.ans3}
                </div>

            </div>

        );
    }
}

export default App;


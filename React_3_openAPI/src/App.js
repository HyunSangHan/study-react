import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import api1 from './Model/api1';
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

    movie = () => () => {
        let _tmp;
        let self = this;
        axios.get('http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json',
            {
            params : {
                key: '33db767e8a6a752e4accc49239ac668e',
                targetDt: '20190213'
                }
            })
            .then(function(response){
                _tmp = response.data.boxOfficeResult.dailyBoxOfficeList[0].movieNm;

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
                    (미세먼 정보가 나올 공간)
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


import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import api1 from './Model/api1'

class App extends Component {

    constructor(){
        super();
        this.state = {
            // currentDust : new findDust(''),
            nowRestauranttitle : '',
            _tempResttitle : ''
        }

    }

    click1 =() =>() =>{
        // 공공 관광
        let _tempResttitle = '';
        let self = this;
        axios.get('http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList', {
            params: {
                rlangtype: 'KOR',
                contentTypeId : 39,
                areaCode : 1,
                sigunguCode : 5,
                cat1 : "A05",
                cat2 : 'A0502',
                cat3 : 'A05020100',
                listYN : 'Y',
                MobileOS : 'ETC',
                MobileApp : 'TourAPI3.0_Guide',
                arrange : 'A',
                numOfRows : 12,
                pageNo : 1,
                ServiceKey : decodeURIComponent('2QU5eb99JUJErbOjP%2Blrcpi%2BeNxaz%2FHNHPH6JoHEzNEB9PsIupv7yZ1oRyajFGVfaVaDkhRWOkbr2clcRAL%2FCA%3D%3D'),
            }
        })
            .then(function (response) {
                let restList: api1[] = [];
                console.log(response.data.response.body.items.item);
                for(let i=0; i<12; i++){
                    // console.log(response.data.response.body.items.item[i]);
                    let itemList: api1 = new api1(response.data.response.body.items.item[i]);
                    restList.push(itemList);
                }
                console.log(restList);
                self._tempResttitle = restList[0].title;
                self.setState({
                    nowRestauranttitle : self._tempResttitle,
                    // currentDust : _tempDust
                });
            })

    }

    render() {
        return (
            <div className="App">
                <div className="pointer" onClick={this.click1()}>
                    여기를 클릭하라
                </div>
                <div>
                    {this.state.nowRestauranttitle}
                </div>
            </div>

        );
    }
}

export default App;


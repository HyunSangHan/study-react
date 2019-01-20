import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      operator: false,
      overlap: false,
      is_first_num: true,
      saved: 0, // (1)
      displayed: 0, // (2)
      total: 0 // (3)
    }
  }

  clickNum = (num) => () => {
    let overlap = this.state.overlap;
    let operator = this.state.operator;
    let displayed = this.state.displayed;
    let is_first_num = this.state.is_first_num;
    let saved = this.state.saved;

    if(operator === false) {
      if(is_first_num === true) { // [CASE 1] 연산자: 없음, 첫번째 숫자타이핑: Y
        displayed = num; //***** 수정 여지 있음
        is_first_num = false;
      } else { // [CASE 2] 연산자: 없음, 첫번째 숫자: N
        displayed = displayed * 10 + num;
      }
    } else {
      if(is_first_num === true) { // [CASE 3] 연산자: 있음, 첫번째 숫자타이핑: Y
        overlap = false;
        saved = displayed;
        displayed = num;
        is_first_num = false;
      } else { // [CASE 4] 연산자: 있음, 첫번째 숫자타이핑: N
        displayed = displayed * 10 + num;
      }
    }



    this.setState({
      overlap: overlap,
      operator: operator,
      displayed: displayed,
      is_first_num: is_first_num,
      saved: saved
      });
    }

  refreshValue = () => () => {
    this.setState({
      operator: false,
      overlap: false,
      is_first_num: true,
      saved: 0,
      displayed: 0,
      total: 0
    });
  }

  clickOper = (oper) => () => {
    let overlap = this.state.overlap;
    let operator = this.state.operator;
    let saved = this.state.saved;
    let displayed = this.state.displayed;
    let total = this.state.total;
    let is_first_num = this.state.is_first_num;

    if(overlap === false) { //중복이 아닌, 첫번째 연산자 입력일 경우
      if(operator === '+') {
        total = saved + displayed;
        displayed = total;
        saved = total;
      } else if(operator === '-') {
        total = saved - displayed;
        displayed = total;
        saved = total;
      } else if(operator === '*') {
        total = saved * displayed;
        displayed = total;
        saved = total;
      } else if(operator === '/') {
        total = saved / displayed;
        displayed = total;
        saved = total;
      } /* else if(oper === '.') {

      }*/
    }

    is_first_num = true;
    operator = oper;
    overlap = true;

    this.setState({
      overlap: overlap,
      operator: operator,
      saved: saved,
      displayed: displayed,
      total: total,
      is_first_num: is_first_num
    });


  }

  clickOper_without = () => () => { //는은 따로 짜야겠네. 기존꺼가 레거시가 되니
    //기존 오퍼 가져오는 게 차이점.
    let overlap = this.state.overlap;
    let operator = this.state.operator;
    let saved = this.state.saved;
    let displayed = this.state.displayed;
    let total = this.state.total;
    let is_first_num = this.state.is_first_num;

    if(overlap === false) { //중복이 아닌, 첫번째 연산자 입력일 경우
      if(operator === '+') {
        total = saved + displayed;
        displayed = total;
        saved = total;
      } else if(operator === '-') {
        total = saved - displayed;
        displayed = total;
        saved = total;
      } else if(operator === '*') {
        total = saved * displayed;
        displayed = total;
        saved = total;
      } else if(operator === '/') {
        total = saved / displayed;
        displayed = total;
        saved = total;
      } /* else if(oper === '.') {

      }*/
    }

    is_first_num = true;
    overlap = true;

    this.setState({
      overlap: overlap,
      operator: operator,
      saved: saved,
      displayed: displayed,
      total: total,
      is_first_num: is_first_num
    });

  }



  render() {
    return (
        <div className="App">

          <div className="same">
            <div className="typing"> {this.state.displayed}</div>
            <div className="caltool">
              <div className="flex">
                <div onClick={this.refreshValue()} className="first_three">AC</div>
                <div onClick={this.clickOper("/")} className="first_one">/</div>
              </div>

              <div className="flex">
                <div onClick={this.clickNum(7)} className="rest_one">7</div>
                <div onClick={this.clickNum(8)} className="rest_one">8</div>
                <div onClick={this.clickNum(9)} className="rest_one">9</div>
                <div onClick={this.clickOper("*")} className="rest_one">*</div>
              </div>

              <div className="flex">
                <div onClick={this.clickNum(4)} className="rest_one">4</div>
                <div onClick={this.clickNum(5)} className="rest_one">5</div>
                <div onClick={this.clickNum(6)} className="rest_one">6</div>
                <div onClick={this.clickOper("-")} className="rest_one">-</div>
              </div>

              <div className="flex">
                <div onClick={this.clickNum(1)} className="rest_one">1</div>
                <div onClick={this.clickNum(2)} className="rest_one">2</div>
                <div onClick={this.clickNum(3)} className="rest_one">3</div>
                <div onClick={this.clickOper("+")} className="rest_one">+</div>
              </div>

              <div className="flex">
                <div onClick={this.clickNum(0)} className="rest_two">0</div>
                <div className="rest_one">.</div>
                <div onClick={this.clickOper_without()} className="rest_one">=</div>
              </div>
            </div>
          </div>

        </div>
    );
  }
}

export default App;
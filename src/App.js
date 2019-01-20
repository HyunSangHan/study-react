import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      value : 0,
      is_first_num: true,
      tmp_value_1 : 0,
      tmp_value_2 : 0,
      tmp_oper : false
    }
  }

  clickNum = (num) => () => {
    let value = this.state.value;
    let tmp_value_1 = this.state.tmp_value_1;
    let tmp_value_2 = this.state.tmp_value_2;
    let tmp_oper = this.state.tmp_oper;
    let is_first_num = this.state.is_first_num;


      if (tmp_oper === false) {
        if(is_first_num === true) {
          value = num;
          tmp_value_1 = value;
          is_first_num = false;
        }

        else {
          if (value < Math.pow(2, 49)) {
            value = value * 10 + num;
            tmp_value_2 = value;
          } else {
            value = value;
          }
        }

      } else {
        if(is_first_num === true) {
          value = num;
          tmp_value_1 = value;
          tmp_value_2 = value;
          is_first_num = false;
        } else {


          value = tmp_value_2 * 10 + num;
          tmp_value_2 = value;
        }
      }


    this.setState({
      value: value,
      tmp_value_1: tmp_value_1,
      tmp_value_2: tmp_value_2,
      is_first_num: is_first_num
    });

    }

  refreshValue = () => () => {
    this.setState({
      value: 0,
      tmp_value_1: 0,
      tmp_value_2: 0,
      tmp_oper: false,
      is_first_num: true
    });
  }

  clickOper = (oper) => () => {
    let tmp_oper = oper;
    let is_first_num = this.state.is_first_num;
    console.log(1)
    this.calculateOper()();

    this.setState({
      tmp_value_1: this.state.value,
      tmp_oper: tmp_oper,
      is_first_num: true

    });
    console.log(2)

  }

  calculateOper = () => () => {
    let tmp_oper = this.state.tmp_oper;
    let value = this.state.value;
    let tmp_value_1 = this.state.tmp_value_1;
    let tmp_value_2 = this.state.tmp_value_2;
    let is_first_num = this.state.is_first_num;
    is_first_num = true;
    console.log(3)
    if(tmp_oper === '+') {
        value = tmp_value_1 + tmp_value_2;
    } else if(tmp_oper === '*') {
        value = tmp_value_1 * tmp_value_2;
    } else if(tmp_oper === '-') {
        value = tmp_value_1 - tmp_value_2;
    } else if(tmp_oper === '/') {
        value = tmp_value_1 / tmp_value_2;
    }
    // else if(tmp_oper === '.') {
    //    ////////////have to write
    // }
    this.setState({
      value: value,
      tmp_value_2: 0,
      is_first_num: is_first_num
    });
  }

  render() {
    return (
        <div className="App">

          <div className="same">
            <div className="typing"> {this.state.value}</div>
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
                <div onClick={this.calculateOper()} className="rest_one">=</div>
              </div>
            </div>
          </div>

        </div>
    );
  }
}

export default App;
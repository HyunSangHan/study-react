import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      value : 0,
      tmp_value_1 : 0,
      tmp_value_2 : 0,
      tmp_oper : false
    }
  }

  clickNum = (num) => () => {
    if(this.state.tmp_oper === false) {
      if (this.state.value < Math.pow(2, 49)) {
        this.setState({
          value: this.state.value * 10 + num
        });
      } else {
        this.setState({
          value: this.state.value
        });
      }
    } else {
        this.setState({
          value: this.state.tmp_value_2 * 10 + num,
          tmp_value_2: this.state.tmp_value_2 * 10 + num
        });
      }
    }

  refreshValue = () => () => {
    this.setState({
      value: 0,
      tmp_value_1: 0,
      tmp_value_2: 0
    });
  }

  clickOper = (oper) => () => {
    this.setState({
      tmp_value_1: this.state.value,
      tmp_value_2: 0,
      tmp_oper: oper
    });
    this.calculateOper();
  }

  calculateOper = () => () => {
    if(this.state.tmp_oper === '+') {
      this.setState({
        value: this.state.tmp_value_1 + this.state.value
      });
    } else if(this.state.tmp_oper === '*') {
      this.setState({
        value: this.state.tmp_value_1 * this.state.value
      });
    } else if(this.state.tmp_oper === '-') {
      this.setState({
        value: this.state.tmp_value_1 - this.state.value
      });
    } else if(this.state.tmp_oper === '/') {
      this.setState({
        value: this.state.tmp_value_1 / this.state.value
      });
    }
    // else if(this.state.tmp_oper === '.') {
    //   this.setState({
    //    ////////////have to write
    //   });
    // }
    this.setState({
      tmp_value_1: this.state.tmp_value_2
//      tmp_oper: oper
    });
  }

  render() {
    return (
        <div className="App">

          <div className="same">
            <div className="typing"> {this.state.value}</div>
            <div className="main">
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
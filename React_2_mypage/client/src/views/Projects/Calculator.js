import React, { Component } from 'react';
import '../../css/Calculator.css';

class Calculator extends Component {

    constructor(props){
        super(props);
        this.state = {
            operator: false,
            is_overlapped: false,
            is_first_num: true,
            is_float: false,
            num_saved: 0, // (1st number or total number)
            num_displayed: 0, // (2st number)
            num_under_point: 0, // (float number)
            is_under_first_num: true,
            num_pow: 0,
            shadow: " "
        }
    }

    clickNum = (num) => () => {
        let is_overlapped = this.state.is_overlapped;
        let operator = this.state.operator;
        let num_displayed = this.state.num_displayed;
        let is_first_num = this.state.is_first_num;
        let num_saved = this.state.num_saved;
        let is_float = this.state.is_float;
        let num_under_point = this.state.num_under_point;
        let is_under_first_num = this.state.is_under_first_num;
        let num_pow = this.state.num_pow;
        let shadow = this.state.shadow;

        let exp;


        //for 소수점 위//
        if (is_float === false) {
            if (operator === false) {
                if (is_first_num === true) { // [CASE 1] 연산자: 없음, 첫번째 숫자타이핑: Y
                    is_first_num = false;
                    num_displayed = num;
                } else { // [CASE 2] 연산자: 없음, 첫번째 숫자: N
                    num_displayed = num_displayed * 10 + num;
                }
            } else {
                if (is_first_num === true) { // [CASE 3] 연산자: 있음, 첫번째 숫자타이핑: Y
                    is_overlapped = false;
                    if (num_displayed !== "무한대") {
                        num_saved = num_displayed;
                    }
                    num_displayed = num;
                    is_first_num = false;
                } else { // [CASE 4] 연산자: 있음, 첫번째 숫자타이핑: N
                    num_displayed = num_displayed * 10 + num;
                }
            }
        }


        //for 소수점 아래//
        else {
            num_pow += 1; //몇번째 소수점인지에 대한 숫자.
            exp = Math.pow(0.1, num_pow);

            if (operator === false) {
                if (is_under_first_num === true) { // [CASE 1] 연산자: 없음, 첫번째 소수 타이핑: Y
                    is_under_first_num = false;
                    num_under_point = num * exp;
                    num_displayed = num_displayed + num_under_point;
                } else { // [CASE 2] 연산자: 없음, 첫번째 소수 타이핑: N
                    num_under_point = num * exp;
                    num_displayed = num_displayed + num_under_point;
                }
            } else {
                if (is_under_first_num === true) { // [CASE 3] 연산자: 있음, 첫번째 소수 타이핑: Y
                    is_under_first_num = false;
                    is_overlapped = false;
                    num_under_point = num * exp;
                    num_displayed = num_displayed + num_under_point;
                } else { // [CASE 4] 연산자: 있음, 첫번째 소수 타이핑: N
                    num_under_point = num * exp;
                    num_displayed = num_displayed + num_under_point;
                }
            }


            //      num_displayed = num_displayed.toFixed(num_pow);
        }

        if(operator === false) {
            shadow = " ";
        } else {
            shadow = num_saved + " " + operator;
        }

        this.setState({
            is_overlapped: is_overlapped,
            operator: operator,
            num_displayed: num_displayed,
            is_first_num: is_first_num,
            num_saved: num_saved,
            is_float: is_float,
            num_under_point: num_under_point,
            is_under_first_num: is_under_first_num,
            num_pow: num_pow,
            shadow: shadow
        });
    }

    refreshValue = () => () => {
        this.setState({
            operator: false,
            is_overlapped: false,
            is_first_num: true,
            num_saved: 0,
            num_displayed: 0,
            is_float: false,
            num_under_point: 0,
            is_under_first_num: true,
            num_pow: 0,
            shadow: " "
        });
    }

    clickOper = (oper) => () => {
        let is_overlapped = this.state.is_overlapped;
        let operator = this.state.operator;
        let num_saved = this.state.num_saved;
        let num_displayed = this.state.num_displayed;
        let is_first_num = this.state.is_first_num;
        let is_float = this.state.is_float;
        let num_pow = this.state.num_pow;
        let num_under_point = this.state.num_under_point;
        let shadow = this.state.shadow;


        //  숫자 너무 크면 고정시키는 코드 넣어야함

        if (is_overlapped === false) {
            shadow = " ";
            if (operator === '+') { //중복이 아닌, 첫번째 연산자 입력일 경우
                num_saved = num_saved + num_displayed;
                num_displayed = num_saved;
            } else if (operator === '-') {
                num_saved = num_saved - num_displayed;
                num_displayed = num_saved;
            } else if (operator === '*') {
                num_saved = num_saved * num_displayed;
                num_displayed = num_saved;
            } else if (operator === '/') {
                if(num_displayed === 0) {
                    shadow = num_saved + " " + operator;
                    num_displayed = "무한대";
                } else {
                    num_saved = num_saved / num_displayed;
                    num_displayed = num_saved;

                }
            }
        }

        is_first_num = true;
        is_overlapped = true;

        if (oper !== '=') {
            operator = oper;
            is_float = false;
            num_pow = 0;
            num_under_point = 0;
        }


        this.setState({
            is_overlapped: is_overlapped,
            operator: operator,
            num_saved: num_saved,
            num_displayed: num_displayed,
            is_first_num: is_first_num,
            is_float: is_float,
            num_pow: num_pow,
            num_under_point: num_under_point,
            shadow: shadow
        });


    }



    clickPoint = () => () => {
        let is_float = this.state.is_float;

        is_float = true;

        this.setState({
            is_float: is_float
        });
    }


    render() {
        return (
            <div className="App">

                <div className="full">
                    <div className="typingtool">
                        <div className="flex_typingtool">
                            <div className="shadow_typing">
                                {this.state.shadow}
                            </div>
                            <div className="typing">
                                {this.state.num_displayed}
                            </div>
                        </div>
                    </div>

                    <div className="caltool">
                        <div className="flex_cartool">
                            <div onClick={this.refreshValue()} className="first_three">AC</div>
                            <div onClick={this.clickOper("/")} className="first_one">/</div>
                        </div>

                        <div className="flex_cartool">
                            <div onClick={this.clickNum(7)} className="rest_one">7</div>
                            <div onClick={this.clickNum(8)} className="rest_one">8</div>
                            <div onClick={this.clickNum(9)} className="rest_one">9</div>
                            <div onClick={this.clickOper("*")} className="rest_one">*</div>
                        </div>

                        <div className="flex_cartool">
                            <div onClick={this.clickNum(4)} className="rest_one">4</div>
                            <div onClick={this.clickNum(5)} className="rest_one">5</div>
                            <div onClick={this.clickNum(6)} className="rest_one">6</div>
                            <div onClick={this.clickOper("-")} className="rest_one">-</div>
                        </div>

                        <div className="flex_cartool">
                            <div onClick={this.clickNum(1)} className="rest_one">1</div>
                            <div onClick={this.clickNum(2)} className="rest_one">2</div>
                            <div onClick={this.clickNum(3)} className="rest_one">3</div>
                            <div onClick={this.clickOper("+")} className="rest_one">+</div>
                        </div>

                        <div className="flex_cartool">
                            <div onClick={this.clickNum(0)} className="rest_two">0</div>
                            <div onClick={this.clickPoint()} className="rest_one">.</div>
                            <div onClick={this.clickOper("=")} className="rest_one">=</div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Calculator;
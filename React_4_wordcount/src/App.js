import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      countNum: 0,
      inputMins: 0,
      gapSecondTotal: 0,
      question: "",
      isTesting: false,
      isTimeout: false
    }
    this.startTimer = this.startTest.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  startTest() {
    const inputMins = document.getElementById("time").value;
    if (isNaN(inputMins) || inputMins <= 0) {
      return;
    }
    const question = document.getElementById("question").value;
    this.setState({
      inputMins: inputMins,
      gapSecondTotal: Math.floor((inputMins * 60)),
      question: question,
      isTesting: true
    });
    this.countDown();
  }

  countDown() { 
    this.setState(prevState => ({
      time: prevState.time,
    }));
    this.timer = setInterval(() => this.setState(prevState => ({
      ...prevState,
      gapSecondTotal: prevState.gapSecondTotal - 1
    })), 1000);
    this.ifTimer = setInterval(() => {
      const { gapSecondTotal } = this.state;
      if (gapSecondTotal <= 0) {
        clearInterval(this.timer, this.ifTimer);
        this.setState({
          isTimeout: true
        });
      }
    }, 1000);
  }

  timeNotification = seconds => {
    let gapMinutePart = parseInt(this.state.gapSecondTotal / 60);
    let gapSecondPart = this.state.gapSecondTotal - gapMinutePart * 60;

    if (gapMinutePart < 10) {
        gapMinutePart = "0" + gapMinutePart
    }
    if (gapSecondPart < 10) {
        gapSecondPart = "0" + gapSecondPart
    }
    return "Time Remaining " + gapMinutePart + ":" + gapSecondPart
  }

  counter = () => {
    const engAnswer = document.getElementById("content").value;

    let countNumNew = engAnswer.split(' ').length + engAnswer.split('\n').length;
    if (engAnswer === '') {
      countNumNew = 0;
    } else if (countNumNew > 0) countNumNew -= 1;

    this.setState({
      countNum: countNumNew
    });

    this.copyText(engAnswer);
  }

  copyText(txt) {
    navigator.clipboard.writeText(txt);
  }

  render() {
    let countBox = null;
    if (this.state.countNum === 1) {
      countBox = <div className="wordcount"> 1 word </div>;
    } else if (this.state.countNum !== 0) {
      countBox = <div className="wordcount"> { this.state.countNum } words </div>;
    }

    let testCondition = null;
    if (!this.state.isTesting) {
      testCondition = 
        <div className="question-wrap">
          <div style={{width: "90%"}}>
            <input id="question" type="text" placeholder="Input a question sentence here!" />
            <input id="time" type="text" /> mins &nbsp;
            <button onClick={this.startTimer}>START TEST</button>
          </div>
        </div>
    } else {
      if (!this.state.isTimeout) {
        testCondition = 
          <div>
            <div className="question">
              {this.state.question}
            </div>
            <div className="time-wrap">
              <div className="time">
                {this.timeNotification(this.state.gapSecondTotal)}
              </div>
            </div>
            <div className="title-sub">You have {this.state.inputMins} minutes to plan and write your response.</div>
          </div>
      } else {
        testCondition = 
          <div>
            <div className="question">
              {this.state.question}
            </div>
            <div className="time-wrap">
              <div className="time-out">
              Time Remaining 00:00
              </div>
            </div>
            <div className="title-sub">You have {this.state.inputMins} minutes to plan and write your response.</div>
          </div>
      }
    }

    return (
    <>
      <div className="container">
        <div className="title">TOEFL WRITING TEST</div>
        { countBox }
        { testCondition }
        <div className="content-wrap">
          <textarea id="content" onChange={this.counter} spellCheck="false" />
        </div>
        <div className="footer">
          Made by Hyunsang Han
        </div>
      </div>
    </>
    );
  }
}

export default App;



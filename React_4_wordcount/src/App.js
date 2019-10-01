import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      countNum: 0,
    }
  }
  
  counter = () => {
    const engAnswer = document.getElementById("content").value;
    this.setState({
      countNum: engAnswer.split(' ').length
    });
  }

  render() {
    return (
      <div className="container">
        <div className="title">TOEFL WRITING TEST</div>
        <div className="wordcount">
        { this.state.countNum } words
        </div>
        <div className="title-sub">You can do it!</div>
        <div className="content-wrap">
          <textarea id="content" onChange={this.counter} />
        </div>
        <div className="footer">
          Made by Hyunsang Han
        </div>
      </div>
    );
  }
}

export default App;



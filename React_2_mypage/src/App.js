import React, { Component } from 'react';
import './App.css';
import {colorPalette} from 'material-icons-react';
import Header from './views/Header.js';
import Footer from './views/Footer.js';
import Main from './views/Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Main/>
          <Footer/>
       </div>
    );
  }
}

export default App;

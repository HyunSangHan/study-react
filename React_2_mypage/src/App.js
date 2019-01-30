import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import ButtonToolbar from "react-bootstrap/es/ButtonToolbar";
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

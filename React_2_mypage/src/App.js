import React, { Component } from 'react';
import logo from './logo.svg';
import menu from './menu_icon.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="header-common">
              <div className="header-logo ml-3">
                  <img src ={logo} alt = "home" height={"40px;"}/>
              </div>
              <div className="header-menus mr-3">
                  <div>ABOUT</div>
                  <div>TIMELINE</div>
                  <div>SKILL SET</div>
                  <div>PRODUCT</div>
                  <div>CONTACT</div>
                  <div>GALLERY</div>
              </div>
              <div className="header-hamburger mr-3">
                  <img src = "menu_icon.png" alt = "menu"/>
              </div>
          </div>
          <div className="body-common">
              <div className="gate">큰 전광판 부분</div>
              <div className="about">
                  <div className="about-left">ABOUT부분1</div>
                  <div className="about-right">ABOUT부분2</div>
              </div>
              <div className="rest">TIMELINE부분</div>
              <div className="rest">SKILL SET부분</div>
              <div className="rest">PRODUCT부분</div>
              <div className="rest">CONTACT부분</div>
              <div className="rest">GALLERY부분</div>
          </div>
          <div className="footer-common">
              <div>Copyright © 2019 Hyunsang Han</div>
          </div>
      </div>
    );
  }
}

export default App;

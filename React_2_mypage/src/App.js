import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import ButtonToolbar from "react-bootstrap/es/ButtonToolbar";

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="header-common w-limit font2">
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
                  <ButtonToolbar>
                      <Button bsSize="large" blocks>
                          <MaterialIcon icon="menu" size="medium" color="white"/>
                      </Button>
                  </ButtonToolbar>
              </div>
          </div>
          <div className="body-common">
              <div className="gate font4">
                  이 페이지는 아직 공사중입니다.
              </div>
              <div className="about font2">
                  <Grid>
                      <Row className="h100percent">
                          <Col className="about-each rest" xs={12} md={4}>
                              ABOUT부분1
                          </Col>
                          <Col className="about-each rest" xs={12} md={8}>
                              ABOUT부분2
                          </Col>
                      </Row>

                  </Grid>
              </div>
              <Grid>
                  <Row className="h100percent">
                      <Col className="about-each rest font2" xs={12} md={12}>
                          TIMELINE부분
                      </Col>
                  </Row>
                  <Row className="h100percent">
                      <Col className="about-each rest font2" xs={12} md={12}>
                          스킬셋
                      </Col>
                  </Row>
                  <Row className="h100percent">
                      <Col className="about-each rest font2" xs={12} md={12}>
                          프로덕트
                      </Col>
                  </Row>
                  <Row className="h100percent">
                      <Col className="about-each rest font2" xs={12} md={12}>
                          컨택
                      </Col>
                  </Row>
                  <Row className="h100percent">
                      <Col className="about-each rest font2" xs={12} md={12}>
                          갤러리
                      </Col>
                  </Row>
              </Grid>
          </div>
          <div className="footer-common font1">
              <div>Copyright © 2019 Hyunsang Han</div>
          </div>
      </div>
    );
  }
}

export default App;

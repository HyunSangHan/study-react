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
          <div className="header-common font-2 z-4">
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

          <div className="body-common z-0">
              <div className="body-under font-4 z-1">
                  이 페이지는 아직 공사중입니다.
                  {/*<img src="../images/Python.png" />*/}
              </div>
              <div className="body-on font-2 z-3">
                  <div className="font-4">
                      <u>ABOUT</u>
                  </div>
                  <Grid>
                      <Row className="h100percent">
                          <Col xs={12} md={5} mdOffset={1}>
                              <div className="mt-5">
                                  <img className="photo" src="../images/Me.jpg" />
                              </div>
                          </Col>
                          <Col className="mt-5" xs={11} xsOffset={1} md={6}>
                              <div className="mt-5 align-left">
                                <h3>한현상</h3>
                                  <h4 className="upper mt-3 mb-5">hyunsang han</h4>
                                  <p>네이버에 재직중</p><p>블라블라</p>
                              </div>
                          </Col>
                      </Row>
                      <Row className="h100percent">
                          <Col className="timeline" xs={6} md={4}>
                              TIMELINE 설명1(왼쪽)
                          </Col>
                          <Col className="timeline" xs={6} md={4}>
                              TIMELINE 가운데
                          </Col>
                          <Col className="timeline" xs={6} md={4}>
                              TIMELINE 설명2(오른쪽)
                          </Col>
                      </Row>
                      <Row className="h100percent">
                          <Col className="rest" xs={12} md={12}>
                              스킬셋
                          </Col>
                      </Row>
                      <Row className="h100percent">
                          <Col className="rest" xs={12} md={12}>
                              프로덕트
                          </Col>
                      </Row>
                      <Row className="h100percent">
                          <Col className="rest" xs={12} md={12}>
                              컨택
                          </Col>
                      </Row>
                      <Row className="h100percent">
                          <Col className="rest" xs={12} md={12}>
                              갤러리
                          </Col>
                      </Row>
                  </Grid>
              </div>
          </div>
          <div className="footer-common font1 z-3">
              <div>Copyright © 2019 Hyunsang Han</div>
          </div>
      </div>
    );
  }
}

export default App;
